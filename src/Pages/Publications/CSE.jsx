import FacultyBody from '../../components/FacultyBody/FacultyBody';
import a from '../../../src/assets/Publications/CSE/a.jpeg'
import b from '../../../src/assets/Publications/CSE/b.jpg'
import c from '../../../src/assets/Publications/CSE/c.jpg'
// import d from '../../../src/assets/Publications/CSE/d.jpg'
// import e from '../../../src/assets/Publications/CSE/e.jpg'
// import f from '../../../src/assets/Publications/CSE/f.jpg'
// import g from '../../../src/assets/Publications/CSE/g.png'
// import h from '../../../src/assets/Publications/CSE/h.png'
// import i from '../../../src/assets/Publications/CSE/i.png'
// import j from '../../../src/assets/Publications/CSE/j.jpg'
// import k from '../../../src/assets/Publications/CSE/k.jpg'
// import l from '../../../src/assets/Publications/CSE/l.jpg'


const CSE = () => {
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
                name={"Mohammad Asaduzzaman Khan"}
                designation={"Associate Professor"}
                email={"mak@baiust.ac.bd"}
                phone={" 01711-003233"}
                fieldOfWork={<p></p>}
                education={<p></p>}
                workExperience={<p></p>}
            >
            </FacultyBody>
            
            <FacultyBody
                img={c}
                name={"Mohammad Asaduzzaman Khan"}
                designation={"Associate Professor"}
                email={"mak@baiust.ac.bd"}
                phone={" 01711-003233"}
                fieldOfWork={<p></p>}
                education={<p></p>}
                workExperience={<p></p>}
            >
            </FacultyBody>

            


        </div>
    );
};

export default CSE;



