import { data } from "@/lib/data";
import { Timeline, TimelineItem } from "@/components/ui/timeline";

export default function Experience() {
  const { experience } = data;

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            My professional journey and experiences in the tech industry.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Timeline>
            {experience.map((job, index) => (
              <TimelineItem 
                key={index} 
                isLast={index === experience.length - 1}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{job.title}</h3>
                  <div className="text-sm font-medium text-primary dark:text-primary mt-1 md:mt-0">{job.period}</div>
                </div>
                <div className="mb-2 text-slate-700 dark:text-slate-300">{job.company}</div>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
                  {job.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
}
