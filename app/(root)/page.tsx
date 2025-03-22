import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {dummyData} from "@/constants";
import InterviewCard from "@/components/interviewCard";
import {getCurrentUser} from "@/lib/actions/auth.action";
import {getInterviewsByUserId, getLatestInterviews} from "@/lib/actions/ai.action";

export default async function HomePage() {


      const user = await getCurrentUser();

      const [userInterviews, allInterview] = await Promise.all([
            getInterviewsByUserId(user?.id as string),
            getLatestInterviews({ userId: user?.id as string }),
      ]);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const hasPastInterviews = userInterviews?.length > 0;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const hasUpcomingInterviews = allInterview?.length > 0;
      return (
          <>
            <section  className={'card-cta'}>
                  <div className='flex flex-col gap-6 max-w-lg'>
                        <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
                        <p className='text-lg'>Practice on real interview questions & get intsant feedback</p>
                        <Button asChild className='btn-primary max-s:w-full'>
                              <Link href='/interview'>Start an Interview</Link>
                        </Button>
                  </div>
                  <Image src='/robot.png' alt={'robo-dude'} width={400} height={400} className={'max-sm:hidden'}/>
            </section>

                <section className='flex flex-col gap-6 mt-8'>
                      <h2>Your Interviews</h2>
                      <div className='interviews-section'>
                            {hasPastInterviews ? (
                                userInterviews?.map((interview) => (
                                    <InterviewCard
                                        key={interview.id}
                                        userId={user?.id}
                                        interviewId={interview.id}
                                        role={interview.role}
                                        type={interview.type}
                                        techstack={interview.techstack}
                                        createdAt={interview.createdAt}
                                    />
                                ))
                            ) : (
                                <p>You haven&apos;t taken any interviews yet</p>
                            )}
                      </div>
                </section>

                <section className='flex flex-col gap-6 mt-8'>
                      <h2>Take an Interview</h2>
                      <div className='interviews-section'>
                            {hasUpcomingInterviews ? (
                                allInterview?.map((interview) => (
                                    <InterviewCard
                                        key={interview.id}
                                        userId={user?.id}
                                        interviewId={interview.id}
                                        role={interview.role}
                                        type={interview.type}
                                        techstack={interview.techstack}
                                        createdAt={interview.createdAt}
                                    />
                                ))
                            ) : (
                                <p>There are no interviews available</p>
                            )}
                      </div>
                </section>

          </>
      )
}
