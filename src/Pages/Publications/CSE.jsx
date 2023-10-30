import { Link } from 'react-router-dom'
import a from '../../../src/assets/Publications/CSE/a.jpeg'
import b from '../../../src/assets/Publications/CSE/b.jpg'
import c from '../../../src/assets/Publications/CSE/c.jpg'
import d from '../../../src/assets/Publications/CSE/d.jpg'
import e from '../../../src/assets/Publications/CSE/e.jpg'
import f from '../../../src/assets/Publications/CSE/f.jpg'
import g from '../../../src/assets/Publications/CSE/g.png'
import h from '../../../src/assets/Publications/CSE/h.png'
import i from '../../../src/assets/Publications/CSE/i.png'
import j from '../../../src/assets/Publications/CSE/j.jpg'
import k from '../../../src/assets/Publications/CSE/k.jpg'
import l from '../../../src/assets/Publications/CSE/l.jpg'

const CSE = () => {
    return (
        <div className="scroll-smooth">
            <div className='msc-container'>
                <div>
                    <img src={a} alt="" />
                </div>
                <section className='msc-container-text'>
                    <div>
                        <h1 className='text-header'>Golam Moktader Nayeem</h1>
                        <h1>Associate Professor & HOD</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>head.cse@baiust.ac.bd <br />
                            gmnayeem.cse@baiust.ac.bd <br />
                            01717293250
                        </small> <br />
                        <Link className="btn btn-active btn-neutral mt-3">View More</Link>
                    </div>
                </section>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={b} alt="" />
                </div>
                <section className='msc-container-text'>
                    <div>
                        <h1 className='text-header'>Mohammad Asaduzzaman Khan</h1>
                        <h1>Associate Professor</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>mak@baiust.ac.bd <br />
                            01711-003233
                        </small> <br />
                        <Link className="btn btn-active btn-neutral mt-3">View More</Link>
                    </div>
                </section>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={c} alt="" />
                </div>
                <section className='msc-container-text'>
                    <div>
                        <h1 className='text-header'>Mamun Ahmed </h1>
                        <h1>Associate Professor</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>mamun.cse@baiust.ac.bd<br />
                            01790356681
                        </small> <br />
                        <Link className="btn btn-active btn-neutral mt-3">View More</Link>
                    </div>
                </section>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={d} alt="" />
                </div>
                <section className='msc-container-text'>
                    <div>
                        <h1 className='text-header'>Mousumi Hasan Mukti</h1>
                        <h1>Associate Professor</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>mousumi.cse@baiust.ac.bd <br />
                            {/* 01717293250 */}
                        </small> <br />

                        {/*  */}
                        <div className="drawer drawer-end">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer-4" className="btn btn-active btn-neutral">View More</label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 drawer-width min-h-full bg-base-200 text-base-content border-s-8 border-green-300">
                                    <div>
                                        <h1 className='text-2xl font-bold'>Mousumi Hasan Mukti</h1>
                                        <h2 className='font-bold'>Assistant Professor</h2>

                                        <div className='flex flex-col gap-2 mt-4'>
                                            <div className="collapse bg-base-200">
                                                <input type="checkbox" className="peer" />
                                                <div className="collapse-title bg-slate-600 text-primary-content peer-checked:bg-green-300 peer-checked:text-black peer-checked:text-secondary-content">
                                                    FIELD OF WORK
                                                </div>
                                                <div className="collapse-content bg-slate-600 text-primary-content peer-checked:bg-green-200 peer-checked:text-black peer-checked:text-secondary-content border-b-4  border-green-300">
                                                    <p>IMAGE PROCESSING, DATABASE MANAGEMENT SYSTEMS, DATA WARE HOUSING AND DATA MINING</p>
                                                </div>
                                            </div>

                                            <div className="collapse bg-base-200">
                                                <input type="checkbox" className="peer" />
                                                <div className="collapse-title bg-slate-600 text-primary-content peer-checked:bg-green-300 peer-checked:text-black peer-checked:text-secondary-content">
                                                    EDUCATION
                                                </div>
                                                <div className="collapse-content bg-slate-600 text-primary-content peer-checked:bg-green-200 peer-checked:text-black peer-checked:text-secondary-content border-b-4  border-green-300">
                                                    <div className="flex w-full">
                                                        <div className="grid  flex-grow  place-items-start">
                                                            <p><u> MSC.</u> <br />
                                                                Jahangirnagar University <br />
                                                                2010-11 <br />
                                                            </p>
                                                        </div>

                                                        <div className="divider divider-horizontal"></div>

                                                        <div className="grid  flex-grow card  place-items-start">
                                                            <p><u>BSC.</u> <br />
                                                                Jahangirnagar University <br />
                                                                2006-07 <br />
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="collapse bg-base-200">
                                                <input type="checkbox" className="peer" />
                                                <div className="collapse-title bg-slate-600 text-primary-content peer-checked:bg-green-300 peer-checked:text-black peer-checked:text-secondary-content ">
                                                    WORK EXPERIENCE
                                                </div>
                                                <div className="collapse-content bg-slate-600 text-primary-content peer-checked:bg-green-200 peer-checked:text-black peer-checked:text-secondary-content border-b-4  border-green-300">
                                                    <div className="flex w-full ">
                                                        <div className="grid  flex-grow  place-items-start">
                                                            <p><u>Assistant Professor</u> 7th Aug 2018- Present</p>
                                                        </div>

                                                        <div className="divider divider-horizontal"></div>

                                                        <div className="grid  flex-grow card  place-items-start">
                                                            <p><u>Lecturer</u> 18th September 2016 -6th Aug 2018</p>
                                                        </div>

                                                        <div className="divider divider-horizontal"></div>

                                                        <div className="grid  flex-grow card  place-items-start">
                                                            <p><u>Executive Programmer</u> Sep 2013-Aug 2016</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collapse bg-base-200">
                                                <input type="checkbox" className="peer" />
                                                <div className="collapse-title bg-slate-600 text-primary-content peer-checked:bg-green-300 peer-checked:text-black peer-checked:text-secondary-content ">
                                                    PUBLICATION BY YEAR
                                                </div>
                                                <div className="collapse-content bg-slate-600 text-primary-content peer-checked:bg-green-200 peer-checked:text-black peer-checked:text-secondary-content border-b-4  border-green-300">
                                                    <div className="flex w-full ">
                                                        <div className="grid  flex-grow  place-items-start">
                                                            <p><u>2022</u> <br />
                                                                Offline Handwritten Signature Recognition Using Deep Convolution Neural Network</p>
                                                        </div>

                                                        <div className="divider divider-horizontal"></div>

                                                        <div className="grid  flex-grow card  place-items-start">
                                                            <p><u>2018</u> <br />
                                                                Bengali Longhand Character Recognition Using Fourier Transform and Euclidean Distance Metric
                                                                <p className='mt-3'>Noise Reduction from Speech Signals Using Modified Spectral Subtraction Technique</p>

                                                                <p className='mt-3'> Addressing The Security Issues of Kerberos Method using RAID Level 5</p></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </section>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={e} alt="" />
                </div>
                <section className='msc-container-text'>
                    <div>
                        <h1 className='text-header'>Dr. Nargis Parvin</h1>
                        <h1>Associate Professor</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small> nargis.cse@baiust.ac.bd <br />
                            01312-281428
                        </small> <br />
                        <button className="btn btn-active btn-neutral mt-3">View More</button>
                    </div>
                </section>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={f} alt="" />
                </div>
                <section className='msc-container-text'>
                    <div>
                        <h1 className='text-header'>Dr. Arif Ahmad</h1>
                        <h1>Associate Professor</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>arif.cse@baiust.ac.bd <br />
                            01715274319
                        </small> <br />
                        <button className="btn btn-active btn-neutral mt-3">View More</button>
                    </div>
                </section>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={g} alt="" />
                </div>
                <section className='msc-container-text'>
                    <div>
                        <h1 className='text-header'>Saha Reno</h1>
                        <h1>Lecturer</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>reno.cse@baiust.ac.bd<br />
                            01706364326
                        </small> <br />
                        <button className="btn btn-active btn-neutral mt-3">View More</button>
                    </div>
                </section>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={h} alt="" />
                </div>
                <section className='msc-container-text'>
                    <div>
                        <h1 className='text-header'>Sayma Alam Suha</h1>
                        <h1>Lecturer</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>suha.cse@baiust.ac.bd  <br />
                            01304037828
                        </small> <br />
                        <button className="btn btn-active btn-neutral mt-3">View More</button>
                    </div>
                </section>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={i} alt="" />
                </div>
                <section className='msc-container-text'>
                    <div>
                        <h1 className='text-header'>Hasan Abdullah</h1>
                        <h1>Lecturer</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>hasan.cse@baiust.ac.bd  <br />
                            0168123656
                        </small> <br />
                        <button className="btn btn-active btn-neutral mt-3">View More</button>
                    </div>
                </section>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={j} alt="" />
                </div>
                <section className='msc-container-text'>
                    <div>
                        <h1 className='text-header'>Md. Imran Hossain Emu</h1>
                        <h1>Lecturer</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>imran.cse@baiust.ac.bd<br />
                            01521232506
                        </small> <br />
                        <button className="btn btn-active btn-neutral mt-3">View More</button>
                    </div>
                </section>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={k} alt="" />
                </div>
                <section className='msc-container-text'>
                    <div>
                        <h1 className='text-header'>Jubayer Ahmed Bhuiyan Shawon</h1>
                        <h1>Lecturer</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>shawon.cse@baiust.ac.bd<br />
                            01972947048
                        </small> <br />
                        <button className="btn btn-active btn-neutral mt-3">View More</button>
                    </div>
                </section>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={l} alt="" />
                </div>
                <section className='msc-container-text'>
                    <div>
                        <h1 className='text-header'>Rabeya Sultana</h1>
                        <h1>Lecturer</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>rabeya.cse@baiust.ac.bd<br />
                            01836727113
                        </small> <br />
                        <button className="btn btn-active btn-neutral mt-3">View More</button>
                    </div>
                </section>
            </div>


        </div>
    );
};

export default CSE;