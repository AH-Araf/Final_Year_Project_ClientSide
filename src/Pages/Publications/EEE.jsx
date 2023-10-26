import a from '../../../src/assets/Publications/EEE/a.jpg'
import b from '../../../src/assets/Publications/EEE/b.png'
import c from '../../../src/assets/Publications/EEE/c.png'
import d from '../../../src/assets/Publications/EEE/d.png'
import e from '../../../src/assets/Publications/EEE/e.jpg'
import f from '../../../src/assets/Publications/EEE/f.jpg'
import g from '../../../src/assets/Publications/EEE/g.jpeg'
import h from '../../../src/assets/Publications/EEE/h.png'

const EEE = () => {
    return (
        <div className="scroll-smooth">
            <div className='msc-container'>
                <div>
                    <img src={a} alt="" />
                </div>
                <section className='msc-container-text'>
                    <div>
                        <h1 className='text-header'>Md. Kamruzzaman</h1>
                        <h1>Associate Professor & HOD</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>head.eee@baiust.ac.bd <br />
                            01625000022
                        </small> <br />
                        <button className="btn btn-active btn-neutral mt-3">View More</button>
                    </div>
                </section>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={b} alt="" />
                </div>
                <section className='msc-container-text'>
                    <div>
                        <h1 className='text-header'>Md. Imran Khan</h1>
                        <h1>Associate Professor</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>imran.eee@baiust.ac.bd  <br />
                            01917003805
                        </small> <br />
                        <button className="btn btn-active btn-neutral mt-3">View More</button>
                    </div>
                </section>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={c} alt="" />
                </div>
                <section className='msc-container-text'>
                    <div>
                        <h1 className='text-header'>Md. Niaz Morshedul Haque</h1>
                        <h1>Associate Professor</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>hniaz.eee@baiust.ac.bd<br />
                            01717255769
                        </small> <br />
                        <button className="btn btn-active btn-neutral mt-3">View More</button>
                    </div>
                </section>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={d} alt="" />
                </div>
                <section className='msc-container-text'>
                    <div>
                        <h1 className='text-header'>Md. Ashraful Islam</h1>
                        <h1>Associate Professor</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>ashraful.eee@baiust.ac.bd<br />
                            01670700261
                        </small> <br />
                        <button className="btn btn-active btn-neutral mt-3">View More</button>
                    </div>
                </section>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={e} alt="" />
                </div>
                <section className='msc-container-text'>
                    <div>
                        <h1 className='text-header'>Dr. Samee Azad</h1>
                        <h1>Lecturer</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>samee.eee@baiust.ac.bd<br />
                            {/* 01717293250 */}
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
                        <h1 className='text-header'>Md. Jahid Hasan</h1>
                        <h1>Lecturer</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>jahid.eee@baiust.ac.bd <br />
                            01753188959
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
                        <h1 className='text-header'>Md. Nahidul Alam</h1>
                        <h1>Lecturer</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>nahidul.eee@baiust.ac.bd <br />
                            01764177098
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
                        <h1 className='text-header'>Kaniz Suburna</h1>
                        <h1>Lecturer</h1>
                        <h2>BAIUST, Cumilla</h2>
                        <small>suburna.eee@baiust.ac.bd<br />
                            01521301934
                        </small> <br />
                        <button className="btn btn-active btn-neutral mt-3">View More</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EEE;