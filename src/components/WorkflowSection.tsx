import React from 'react';
import { WORKFLOW_STEPS, type WorkflowStep } from '../content/workflowData';
import { ScrollReveal } from './ScrollReveal';

export const WorkflowSection: React.FC = () => {
  return (
    <section id="alur-kerja" className="py-24 sm:py-36 bg-studio-100/30 border-b border-studio-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-16 space-y-3">
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-studio-950 leading-[1.15]">
              Alur Pengerjaan
            </h2>
            <p className="text-sm text-studio-600 font-light leading-relaxed">
              Empat tahap transparan dari pengukuran awal di lokasi hingga serah terima kunci.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Clean Step Cards with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((item: WorkflowStep, index: number) => (
            <ScrollReveal key={item.step} delay={index * 90}>
              <div
                className="h-full p-7 sm:p-8 rounded-md border border-studio-200 bg-studio-50 shadow-sm flex flex-col justify-between space-y-6 hover:border-accent/80 hover:shadow-md transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <span className="font-mono text-3xl font-light text-accent block transition-transform duration-300 group-hover:translate-x-1">
                    {item.step}
                  </span>

                  <h3 className="font-heading text-lg font-bold text-studio-950">
                    {item.title}
                  </h3>

                  <p className="text-xs text-studio-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-studio-200/70 text-[11px] font-mono text-studio-400">
                  {item.phase}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
