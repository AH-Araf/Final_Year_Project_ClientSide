import a from '../../../src/assets/Publications/CE/a.png'
import b from '../../../src/assets/Publications/CE/b.png'
// import c from '../../../src/assets/Publications/CE/c.png'
// import d from '../../../src/assets/Publications/CE/d.png'
// import e from '../../../src/assets/Publications/CE/e.png'
// import f from '../../../src/assets/Publications/CE/f.jpg'
// import g from '../../../src/assets/Publications/CE/g.jpg'
// import h from '../../../src/assets/Publications/CE/h.png'
// import i from '../../../src/assets/Publications/CE/i.jpg'
// import j from '../../../src/assets/Publications/CE/j.jpg'
// import k from '../../../src/assets/Publications/CE/k.jpg'
// import l from '../../../src/assets/Publications/CE/l.png'
// import m from '../../../src/assets/Publications/CE/m.jpg'
// import n from '../../../src/assets/Publications/CE/n.png'

import FacultyBody from "../../components/FacultyBody/FacultyBody";

const CE = () => {
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <FacultyBody
                img={a}
                name={"Golam Moktader Nayeem"}
                designation={"Associate Professor & HOD"}
                email={"head.cse@baiust.ac.bd"}
                phone={" 01717293250"}
                fieldOfWork={<p><b>ROBOTIC PATH PLANNING 3D</b> Path Planning for Autonomous Unmanned Aerial Vehicle (UAV) <br />
                    <b>ARTIFICIAL INTELLIGENCE</b> Metaheuristics Algorithms for Robotic Path Planning <br />
                    <b>DATA SCIENCE</b> Data classification using different shallow Machine Learning algorithms
                </p>}
                education={<p></p>}
                workExperience={<p></p>}
            >
            </FacultyBody>

            <FacultyBody
                img={b}
                name={"Golam Moktader Nayeem"}
                designation={"Associate Professor & HOD"}
                email={"head.cse@baiust.ac.bd"}
                phone={" 01717293250"}
                fieldOfWork={<p><b>ROBOTIC PATH PLANNING 3D</b> Path Planning for Autonomous Unmanned Aerial Vehicle (UAV) <br />
                    <b>ARTIFICIAL INTELLIGENCE</b> Metaheuristics Algorithms for Robotic Path Planning <br />
                    <b>DATA SCIENCE</b> Data classification using different shallow Machine Learning algorithms
                </p>}
                education={<p></p>}
                workExperience={<p></p>}
            >
            </FacultyBody>
        </div>


    );
};

export default CE;