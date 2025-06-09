import React from 'react';
import t1 from "../../assets/images/temoin.jpg";
import t2 from "../../assets/images/temoin1.jpg";
import edu from "../../assets/images/edu.jpg";
const Testimonials = () => {
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <h2 className="mt-4 text-3xl font-bold text-blue-500 sm:text-4xl xl:text-5xl font-pj">Témoignages</h2>
                    </div>

                    <div className="relative mt-10 md:mt-24">
                        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                            <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{ background: 'linear-gradient(135deg, #1E40AF, #60A5FA)'}}></div>
                        </div>

                        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                            <div className="flex flex-col overflow-hidden shadow-xl">
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div className="flex-1">
                                        <blockquote className="flex-1 mt-8">
                                            <p className="text-lg leading-relaxed text-gray-900 font-pj">“Nous avons remarqué que notre enfant s’épanouit depuis qu’il est à la MBJ. Il est plus à l’aise, plus confiant et apprécie vraiment son temps passé là-bas._”</p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src={t2} alt="" />
                                        <div className="ml-4">
                                            {/* <p className="text-base font-bold text-gray-900 font-pj">Michael Kim</p> */}
                                            <p className="mt-0.5 text-sm font-pj text-gray-600">Parent</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden shadow-xl">
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div className="flex-1">
                                        <blockquote className="flex-1 mt-8">
                                            <p className="text-lg leading-relaxed text-gray-900 font-pj">“La MBJ offre des activités variées et enrichissantes qui stimulent la curiosité, ma petite-fille les apprécie beaucoup et cela l’aide à apprendre et à s’amuser en même temps.”</p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src={t1} alt="" />
                                        <div className="ml-4">
                                            {/* <p className="text-base font-bold text-gray-900 font-pj">Melissa Reynolds</p> */}
                                            <p className="mt-0.5 text-sm font-pj text-gray-600">parent</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden shadow-xl">
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div className="flex-1">
                                        <blockquote className="flex-1 mt-8">
                                            <p className="text-lg leading-relaxed text-gray-900 font-pj">“Travailler à la MBJ, c’est voir chaque jour les enfants grandir, s’épanouir et prendre confiance en eux. Grâce aux activités proposées, ils développent leurs compétences tout en s’amusant. C’est une belle expérience de les accompagner dans leur parcours.”</p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src={edu} alt="" />
                                        <div className="ml-4">
                                            {/* <p className="text-base font-bold text-gray-900 font-pj">Sarah Morgan</p> */}
                                            <p className="mt-0.5 text-sm font-pj text-gray-600">éducateur spécialisé</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
