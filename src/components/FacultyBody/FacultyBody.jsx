

const FacultyBody = ({ img,
    name,
    designation,
    email,
    phone,
    fieldOfWork,
    education,
    workExperience,
}) => {
    return (
        <div className="hover:border-4 hover:border-green-100 md:m-4 m-2 bg-blue-50 " data-aos="fade-up">
            <div className="mx-auto w-10/12 text-center my-8">
                <div className="flex justify-center items-center" ><img className="w-32 h-38 border-2 border-gray-300" src={img} alt="" /></div>
                <p className="text-yellow-600">{designation}</p>
                <p className="text-yellow-600 mb-2">BAIUST, Cumilla</p>
                <h3 className="lg:text-xl uppercase border-y-4 ">{name}</h3>
                <p>{email}</p>
                <p>{phone}</p>


                {/*  */}
                <div className="text-start mt-1 text-xs">
                    <div className="collapse bg-base-200">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-slate-600 text-primary-content peer-checked:bg-green-200 peer-checked:text-black">
                            FIELD OF WORK
                        </div>
                        <div className="collapse-content bg-slate-600 text-primary-content peer-checked:bg-green-100 peer-checked:text-black  border-b-2  border-green-500">
                            <p>{fieldOfWork}</p>
                        </div>
                    </div>
                </div>

                <div className="text-start mt-1 text-xs">
                    <div className="collapse bg-base-200">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-slate-600 text-primary-content peer-checked:bg-green-200 peer-checked:text-black">
                            EDUCATION
                        </div>
                        <div className="collapse-content bg-slate-600 text-primary-content peer-checked:bg-green-100 peer-checked:text-black  border-b-2  border-green-500">
                            <p>{education}</p>
                        </div>
                    </div>
                </div>

                <div className="text-start mt-1 text-xs">
                    <div className="collapse bg-base-200">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-slate-600 text-primary-content peer-checked:bg-green-200 peer-checked:text-black">
                            WORK EXPERIENCE
                        </div>
                        <div className="collapse-content bg-slate-600 text-primary-content peer-checked:bg-green-100 peer-checked:text-black  border-b-2  border-green-500">
                            <p>{workExperience}</p>
                        </div>
                    </div>
                </div>
                {/*  */}
            </div>



        </div>
    );
};

export default FacultyBody;