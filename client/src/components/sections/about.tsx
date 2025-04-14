import { User, BookOpen, Award, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function About() {
  const { ref: headingRef, isVisible: isHeadingVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
    freezeOnceVisible: true
  });
  
  const { ref: leftColRef, isVisible: isLeftColVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    freezeOnceVisible: true
  });
  
  const { ref: rightColRef, isVisible: isRightColVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    freezeOnceVisible: true
  });
  
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-cyan-500/10 via-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-orange-500/10 via-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-r from-pink-500/20 to-primary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headingRef}
          className={`max-w-3xl mx-auto text-center mb-16 transform transition-all duration-1000 ${
            isHeadingVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block text-black dark:text-white">
            About Me
            <div className="w-full h-1 bg-gradient-to-r from-[#5FBDB0] via-[#F8C765] to-[#F78A76] absolute -bottom-2 left-0"></div>
          </h2>
          <div className="h-8 mb-8"></div>
          <p className="text-lg md:text-xl text-black dark:text-white leading-relaxed">
            Passionate about building scalable and user-focused applications using the MERN stack. Quick learner, dedicated coder,
            and team player seeking to contribute to impactful real-world software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div 
            ref={leftColRef}
            className={`space-y-6 transform transition-all duration-1000 ${
              isLeftColVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-20px] opacity-0' 
            }`}
          >
            <Card className="rounded-none border-l-4 border-l-[#5FBDB0] border-t-0 border border-black dark:border-white bg-white dark:bg-black shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold flex items-center text-black dark:text-white">
                  <User className="w-5 h-5 mr-2 text-[#5FBDB0]" />
                  Personal Information
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="font-medium w-28 text-black dark:text-white">Name:</span>
                    <span className="text-black dark:text-white">Harsha H G</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-28 text-black dark:text-white">Email:</span>
                    <span className="text-black dark:text-white">harshahg829656@gmail.com</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-28 text-black dark:text-white">Phone:</span>
                    <span className="text-black dark:text-white">+91 9980207985</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-28 text-black dark:text-white">Location:</span>
                    <span className="text-black dark:text-white">Bengaluru, India</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-none border-l-4 border-l-[#F8C765] border-t-0 border border-black dark:border-white bg-white dark:bg-black shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold flex items-center text-black dark:text-white">
                  <BookOpen className="w-5 h-5 mr-2 text-[#F8C765]" />
                  Education
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-black dark:text-white">Bangalore Institute of Technology, Bengaluru</h4>
                    <p className="text-black dark:text-white">Bachelor of Engineering in Computer Science</p>
                    <div className="flex justify-between text-sm text-black dark:text-white mt-1">
                      <span>2021 - 2025</span>
                      <span>CGPA: 8.78/10</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-black dark:text-white">STG PU College, Mandya</h4>
                    <p className="text-black dark:text-white">Pre-University Course (PUC)</p>
                    <div className="flex justify-between text-sm text-black dark:text-white mt-1">
                      <span>2020 - 2021</span>
                      <span>Percentage: 99.6%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div 
            ref={rightColRef}
            className={`space-y-6 transform transition-all duration-1000 delay-300 ${
              isRightColVisible ? 'translate-x-0 opacity-100' : 'translate-x-[20px] opacity-0' 
            }`}
          >
            <Card className="rounded-none border-l-4 border-l-[#F78A76] border-t-0 border border-black dark:border-white bg-white dark:bg-black shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold flex items-center text-black dark:text-white">
                  <Award className="w-5 h-5 mr-2 text-[#F78A76]" />
                  Achievements
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 list-disc list-inside text-black dark:text-white">
                  <li>Solved 300+ Data Structures and Algorithms problems on LeetCode with a max contest rating of 1528.</li>
                  <li>Participated in internal college-level hackathons, contributing to end-to-end full-stack web applications under time constraints.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-none border-l-4 border-l-black dark:border-l-white border-t-0 border border-black dark:border-white bg-white dark:bg-black shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold flex items-center text-black dark:text-white">
                  <Award className="w-5 h-5 mr-2 text-black dark:text-white" />
                  Certifications
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-black dark:text-white">The Complete 2024 Web Development Bootcamp</h4>
                    <p className="text-black dark:text-white">by Dr. Angela Yu - Udemy</p>
                    <a href="#" className="text-[#5FBDB0] dark:text-[#5FBDB0] text-sm hover:underline">View Certificate</a>
                  </div>
                  <div>
                    <h4 className="font-medium text-black dark:text-white">LeetCode Max Contest Rating: 1528</h4>
                    <a href="#" className="text-[#F78A76] dark:text-[#F78A76] text-sm hover:underline">View Profile</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
