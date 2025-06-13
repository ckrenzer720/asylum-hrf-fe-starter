"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { humanRightFirstURL } from '../constants';

export default function Home() {
  const router = useRouter();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20;
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10);
  };

  return (
    <div className='flex-c w-[100vw] secondary-c'>
      <section className='flex primary-c pt-4 pb-8'>
        <div className='flex-c mx-auto'>
          <h1 className='text-5xl mb-8 text-white font-body'>Asylum Office Grant Rate Tracker</h1>
          <h3 className='text-white text-base text-center max-w-3xl font-body'>
            The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on
            Asylum Office decisions.
          </h3>
        </div>
      </section>
      <section className='graphs-section flex-c pt-10'>
        <div className='flex-c'>
          <div className='flex justify-center m-14 gap-20 text-lg'>
            <div className='flex-c gap-3 font-body'>
              <Image 
                src="/pie-chart.png" 
                alt="Pie Chart" 
                width={300} 
                height={300}
                className='h-[300px] contain-content'
              />
              <h3>Search Grant Rates By Nationality</h3>
            </div>
            <div className='flex-c gap-3 font-body'>
              <Image 
                src="/line-graph.png" 
                alt="Line Graph" 
                width={500} 
                height={300}
                className='h-[300px] w-[500px]'
              />
              <h3>Search Grant Rates Over Time</h3>
            </div>
            <div className='flex-c gap-3 font-body'>
              <Image 
                src="/bar-graph.png" 
                alt="Bar Graph" 
                width={500} 
                height={300}
                className='h-[300px] w-[500px]'
              />
              <h3>Search Grant Rates By Office</h3>
            </div>
          </div>
          <div className='flex align-center mx-auto gap-8 font-body'>
            <button
              className='bg-[#aaa] px-[10px] py-[5px] text-white text-md font-semibold rounded-lg hover:opacity-85 scale-105'
              onClick={() => router.push('/graphs')}
            >
              View the Data
            </button>
            <button 
              className='bg-[#aaa] px-[10px] py-[5px] text-white text-md font-semibold rounded-lg hover:opacity-85 scale-105' 
              onClick={() => console.log('Download functionality coming soon')}
            >
              Download the Data
            </button>
          </div>
        </div>
      </section>

      <section className='middle-section flex'>
        <div className='flex-1 hrf-img-container content-center p-20'>
          <Image 
            src="/paper-stack.jpg" 
            alt="Human Rights First" 
            width={800} 
            height={600}
            className='hrf-img rounded-2xl h-[70%] w-[100%]'
          />
        </div>
        <div className='middle-section-text-container flex-1 content-center p-20'>
          <p className='text-xl font-body'>
            Human Rights First has developed a search tool that provides a user-friendly way to explore a dataset of asylum decisions made by the USCIS Asylum
            Office between FY 2016 and May 2021, obtained through a Freedom of Information Act request. Users can search asylum grant rates by year,
            nationality, and asylum office, visualize the data with charts and heat maps, and download the dataset.
          </p>
        </div>
      </section>

      <section className='insights-section flex-c gap-16'>
        <div className='insights-section-header'>
          <h3 className='text-5xl font-body'>Systemic Disparity Insights</h3>
        </div>
        <div className='insights-section-details flex justify-center m-14 gap-20 text-2xl'>
          <div className='flex-c-1 gap-12'>
            <div className='insights-details-header'>
              <h3 className='text-4xl font-body'>36%</h3>
            </div>
            <div className='insights-details-content'>
              <p className='text-base font-body'>
                By the end of the Trump administration, the average asylum office grant rate had declined by 36 percent, dropping from 44 percent in fiscal year
                2016 to 28 percent in fiscal year 2020.
              </p>
            </div>
          </div>
          <div className='flex-c-1 gap-12'>
            <div className='insights-details-header'>
              <h3 className='text-4xl font-body'>5%</h3>
            </div>
            <div className='insights-details-content'>
              <p className='text-base font-body'>The grant rate at the New York asylum office fell to 5 percent in the 2020 fiscal year.</p>
            </div>
          </div>
          <div className='flex-c-1 gap-12'>
            <div className='insights-details-header'>
              <h3 className='text-4xl font-body'>6x Lower</h3>
            </div>
            <div className='insights-details-content'>
              <p className='text-base font-body'>
                Between fiscal years 2017 and 2020, the New York asylum office&apos;s average grant rate was one-sixth that of the San Francisco asylum office.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='read-more-section'>
        <button 
          className='primary-c text-white px-4 py-2 rounded-lg hover:opacity-85 scale-105' 
          onClick={() => window.open(humanRightFirstURL, '_blank')}
        >
          Read More
        </button>
      </section>

      <section className='back-to-top p-16'>
        <button 
          className='back-to-top font-medium rounded-lg' 
          onClick={scrollToTop}
        >
          Back To Top ^
        </button>
      </section>
    </div>
  );
}
