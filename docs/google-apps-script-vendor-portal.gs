/**
 * =========================================================================
 * GOOGLE APPS SCRIPT: WEBHOOK DATABASE VENDOR MATERIAL WORKSHOP ARSI
 * =========================================================================
 * Skrip ini dipasang di Google Spreadsheet untuk menerima data formulir
 * kemitraan vendor dari website https://arsistudiointerior.id/mitra secara otomatis.
 *
 * CARA PEMASANGAN (Hanya 2 Menit):
 * 1. Buka Google Spreadsheet baru di Google Drive Anda.
 *    Beri judul file: "Database Vendor Material - Workshop Arsi"
 * 2. Di menu atas spreadsheet, klik: Extensions (Ekstensi) > Apps Script.
 * 3. Hapus semua kode default di layar editor, lalu salin (paste) seluruh isi file ini.
 * 4. Klik ikon "Save" (Disket) atau tekan Ctrl+S.
 * 5. Klik tombol biru di kanan atas: "Deploy" > "New deployment".
 * 6. Klik ikon gerigi (Select type) di sebelah kiri > pilih "Web app".
 * 7. Isi konfigurasi:
 *    - Description: "Webhook Portal Vendor Arsi"
 *    - Execute as: "Me (email Anda)"
 *    - Who has access: "Anyone" (PENTING: Harus Anyone agar website bisa mengirim data tanpa login)
 * 8. Klik tombol "Deploy". Jika Google meminta izin akses, klik "Authorize access" > pilih akun Anda > "Advanced" > "Go to ... (unsafe)" > "Allow".
 * 9. Salin "Web app URL" (URL berakhiran /exec).
 * 10. Buka file .env di website Anda, tambahkan:
 *     VITE_VENDOR_FORM_WEBHOOK_URL="PASTE_URL_WEB_APP_DISINI"
 * =========================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-setup Header baris pertama jika sheet masih kosong
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Waktu Pengajuan",
        "Kode Tiket",
        "Nama Brand / Merek",
        "Nama Perusahaan / Legal",
        "Tipe Entitas",
        "Kategori Material",
        "Kategori Spesifik (Lainnya)",
        "Lokasi Gudang / Depo",
        "Lead Time ke Workshop Arsi",
        "Link E-Katalog / Price List",
        "Skema Komersial B2B",
        "Komitmen Uji Sampel Fisik",
        "Nama PIC",
        "Jabatan PIC",
        "WhatsApp PIC",
        "Email PIC",
        "Website / Media Sosial",
        "Catatan Keunggulan & Sertifikasi",
        "Status Review Workshop Arsi"
      ];
      sheet.appendRow(headers);
      
      // Format Header agar rapi & profesional
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#18181b");
      headerRange.setFontColor("#f59e0b");
      headerRange.setFontWeight("bold");
      headerRange.setFontFamily("Consolas");
      sheet.setFrozenRows(1);
    }

    // Parse data JSON dari website
    var data = {};
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    }

    var timestamp = new Date();
    var formattedDate = Utilities.formatDate(timestamp, "Asia/Jakarta", "dd/MM/yyyy HH:mm:ss");

    var ticket = data.ticketNumber || ("ARSI-VDR-" + ("00000" + Math.floor(Math.random() * 999999)).slice(-6));
    var brandName = data.brandName || "-";
    var companyName = data.companyName || "-";
    var entityType = formatEntityType(data.entityType);
    var categories = Array.isArray(data.materialCategories) ? data.materialCategories.join(", ") : (data.materialCategories || "-");
    var customCategory = data.customCategory || "-";
    var warehouse = formatWarehouseLocation(data.warehouseLocation);
    var leadTime = formatLeadTime(data.deliveryLeadTime);
    var catalogUrl = data.catalogUrl || "-";
    var commercialTerms = Array.isArray(data.commercialTerms) ? data.commercialTerms.join(", ") : (data.commercialTerms || "-");
    var sampleCommitment = formatSampleCommitment(data.sampleCommitment);
    var picName = data.picName || "-";
    var picRole = data.picRole || "-";
    var picWhatsApp = data.picWhatsApp || "-";
    var picEmail = data.picEmail || "-";
    var website = data.website || "-";
    var notes = data.notes || "-";
    var status = "Menunggu Review Tim Workshop Arsi";

    // Simpan baris baru ke Spreadsheet
    sheet.appendRow([
      formattedDate,
      ticket,
      brandName,
      companyName,
      entityType,
      categories,
      customCategory,
      warehouse,
      leadTime,
      catalogUrl,
      commercialTerms,
      sampleCommitment,
      picName,
      picRole,
      picWhatsApp,
      picEmail,
      website,
      notes,
      status
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", ticket: ticket }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "active", message: "Webhook Portal Vendor Workshop Arsi siap menerima data POST." }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Helper Formatters
function formatEntityType(type) {
  switch (type) {
    case "prinsipal": return "Prinsipal / Pabrikan Manufaktur Langsung";
    case "distributor": return "Distributor Resmi / Sole Agent";
    case "toko_retail": return "Toko Grosir / Retail Bahan Bangunan";
    case "aplikator": return "Aplikator Spesialis & Custom Fabrication";
    default: return type || "-";
  }
}

function formatWarehouseLocation(loc) {
  switch (loc) {
    case "bandung": return "Depo Bandung & Sekitarnya (Stok Lokal)";
    case "jabodetabek": return "Gudang Jabodetabek (Pengiriman Rutin)";
    case "surabaya_jawa": return "Gudang Surabaya / Jawa Tengah";
    case "luar_jawa": return "Luar Jawa";
    case "indent": return "Indent / Impor";
    default: return loc || "-";
  }
}

function formatLeadTime(lt) {
  switch (lt) {
    case "ready_1_2": return "1 - 2 Hari Kerja (Ready Stock)";
    case "regular_3_5": return "3 - 5 Hari Kerja (Reguler)";
    case "indent_1_3_weeks": return "1 - 3 Minggu (Indent)";
    case "custom": return "Made to Order / Menyesuaikan Volume";
    default: return lt || "-";
  }
}

function formatSampleCommitment(comm) {
  switch (comm) {
    case "yes": return "✅ BERSEDIA kirim Sample Box / Swatch fisik ke Workshop Arsi (Prioritas)";
    case "spk_only": return "⚠️ Khusus ada SPK / Proyek tertentu";
    case "digital_only": return "❌ Hanya katalog digital / brosur PDF";
    default: return comm || "-";
  }
}
