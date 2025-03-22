import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {dummyData} from "@/constants";
import InterviewCard from "@/components/interviewCard";

export default function HomePage() {
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
                            {/*<p>You haven&apos;t taken any interviews yets</p>*/}
                            {dummyData.map(interview=><InterviewCard key={interview.id} {...interview}/>)}
                      </div>
                </section>

                <section className='flex flex-col gap-6 mt-8'>
                      <h2>Take an Interview</h2>
                      <div className='interviews-section'>
                            {/*<p>There are no interviews available</p>*/}
                            {dummyData.map(interview=><InterviewCard key={interview.id} {...interview}/>)}

                      </div>
                </section>

          </>
      )
}
