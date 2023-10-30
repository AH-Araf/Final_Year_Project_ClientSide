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
                        <Link to='/CSESir1' className="btn btn-active btn-neutral mt-3">View More</Link>
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
                        <Link to='/CSESir2' className="btn btn-active btn-neutral mt-3">View More</Link>
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
                        <Link to='/CSESir3' className="btn btn-active btn-neutral mt-3">View More</Link>
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
                        {/* <button className="btn btn-active btn-neutral mt-3">View More</button> */}
                        {/*  */}
                        <div className="drawer drawer-end">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer-4" className="btn btn-active btn-neutral">View More</label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 drawer-width min-h-full bg-base-200 text-base-content border-s-8 border-green-300">
                                    {/* Sidebar content here */}
                                    <div>
                                        <h1>Mousumi Hasan Mukti</h1>
                                        <h2>Assistant Professor</h2>

                                        <div className="collapse bg-base-200">
                                            <input type="checkbox" className="peer" />
                                            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                                Click me to show/hide content
                                            </div>
                                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                                <p>hello</p>
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