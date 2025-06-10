import React, { useState } from 'react';
import t1 from "../../assets/images/temoin.jpg";
import t2 from "../../assets/images/temoin1.jpg";
import edu from "../../assets/images/edu.jpg";
import { FaQuoteLeft, FaHeart, FaStar, FaUsers, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const EnhancedTestimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            text: "Nous avons remarqué que notre enfant s'épanouit depuis qu'il est à la MBJ. Il est plus à l'aise, plus confiant et apprécie vraiment son temps passé là-bas.",
            author: "Parent",
            image: t2,
            rating: 5,
            color: "blue",
            role: "Famille accompagnée",
            highlight: "Plus confiant et épanoui"
        },
        {
            id: 2,
            text: "La MBJ offre des activités variées et enrichissantes qui stimulent la curiosité, ma petite-fille les apprécie beaucoup et cela l'aide à apprendre et à s'amuser en même temps.",
            author: "Parent",
            image: t1,
            rating: 5,
            color: "cyan",
            role: "Grand-parent",
            highlight: "Activités enrichissantes"
        },
        {
            id: 3,
            text: "Travailler à la MBJ, c'est voir chaque jour les enfants grandir, s'épanouir et prendre confiance en eux. Grâce aux activités proposées, ils développent leurs compétences tout en s'amusant. C'est une belle expérience de les accompagner dans leur parcours.",
            author: "Éducateur spécialisé",
            image: edu,
            rating: 5,
            color: "red",
            role: "Équipe pédagogique",
            highlight: "Grandir et s'épanouir"
        }
    ];

    const getColorClasses = (color) => {
        switch (color) {
            case 'red':
                return {
                    gradient: 'from-red-500 via-pink-500 to-red-600',
                    lightGradient: 'from-red-50 to-pink-50',
                    text: 'text-red-600',
                    ring: 'ring-red-200'
                };
            case 'cyan':
                return {
                    gradient: 'from-cyan-500 via-blue-500 to-cyan-600',
                    lightGradient: 'from-cyan-50 to-blue-50',
                    text: 'text-cyan-600',
                    ring: 'ring-cyan-200'
                };
            default:
                return {
                    gradient: 'from-blue-500 via-cyan-500 to-blue-600',
                    lightGradient: 'from-blue-50 to-cyan-50',
                    text: 'text-blue-600',
                    ring: 'ring-blue-200'
                };
        }
    };

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/50 to-cyan-50/50 overflow-hidden">
            
            {/* Fond artistique animé */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-300/20 rounded-full blur-2xl animate-pulse delay-500"></div>
                </div>
                
                {/* Motif géométrique subtil */}
                <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full" style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 2px, transparent 2px),
                                        radial-gradient(circle at 75% 75%, #06B6D4 2px, transparent 2px)`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>
            </div>

            <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                
                {/* En-tête spectaculaire */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-lg mb-8">
                        <FaUsers className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-base font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            Témoignages authentiques
                        </span>
                    </div>
                    
                    <h2 className="text-5xl lg:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                            Ils parlent
                        </span>
                        <br />
                        <span className="text-gray-800">de nous</span>
                    </h2>
                    
                    <div className="flex items-center justify-center space-x-4 mb-8">
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                        <FaHeart className="w-6 h-6 text-red-400" />
                        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    </div>
                    
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Les familles et professionnels partagent leur expérience authentique avec la Maison Bleue de Julien
                    </p>
                </div>

                {/* Témoignage principal en grand format */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="relative">
                        {/* Card principale avec effet spectaculaire */}
                        <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-700/20 rounded-3xl blur-2xl"></div>
                        
                        <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50">
                            
                            {/* Quote géante */}
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-xl">
                                <FaQuoteLeft className="w-8 h-8 text-white" />
                            </div>

                            {/* Contenu du témoignage */}
                            <div className="grid lg:grid-cols-3 gap-8 items-center">
                                
                                {/* Photo et profil */}
                                <div className="lg:col-span-1 text-center">
                                    <div className="relative inline-block mb-6">
                                        <div className={`absolute -inset-4 bg-gradient-to-r ${getColorClasses(testimonials[activeTestimonial].color).gradient} rounded-full blur opacity-30 animate-pulse`}></div>
                                        <img 
                                            className="relative w-32 h-32 object-cover rounded-full border-4 border-white shadow-xl" 
                                            src={testimonials[activeTestimonial].image} 
                                            alt={testimonials[activeTestimonial].author} 
                                        />
                                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                                            <FaHeart className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {testimonials[activeTestimonial].author}
                                    </h3>
                                    <p className={`text-lg font-medium ${getColorClasses(testimonials[activeTestimonial].color).text} mb-4`}>
                                        {testimonials[activeTestimonial].role}
                                    </p>
                                    
                                    {/* Étoiles */}
                                    <div className="flex justify-center space-x-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                                        ))}
                                    </div>
                                    
                                    {/* Highlight */}
                                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${getColorClasses(testimonials[activeTestimonial].color).lightGradient} rounded-full border ${getColorClasses(testimonials[activeTestimonial].color).ring} ring-1`}>
                                        <span className="text-sm font-medium text-gray-700">
                                            "{testimonials[activeTestimonial].highlight}"
                                        </span>
                                    </div>
                                </div>

                                {/* Texte du témoignage */}
                                <div className="lg:col-span-2">
                                    <blockquote className="text-2xl lg:text-3xl leading-relaxed text-gray-700 italic font-light">
                                        "{testimonials[activeTestimonial].text}"
                                    </blockquote>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
                                <button 
                                    onClick={prevTestimonial}
                                    className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-500 hover:to-cyan-500 text-gray-600 hover:text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    <FaChevronLeft className="w-4 h-4" />
                                    <span className="font-medium">Précédent</span>
                                </button>

                                {/* Indicateurs */}
                                <div className="flex space-x-3">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveTestimonial(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                index === activeTestimonial 
                                                    ? `bg-gradient-to-r ${getColorClasses(testimonials[index].color).gradient}` 
                                                    : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                        />
                                    ))}
                                </div>

                                <button 
                                    onClick={nextTestimonial}
                                    className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-500 hover:to-cyan-500 text-gray-600 hover:text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    <span className="font-medium">Suivant</span>
                                    <FaChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mini cards des autres témoignages */}
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <button
                            key={testimonial.id}
                            onClick={() => setActiveTestimonial(index)}
                            className={`group relative p-6 rounded-2xl transition-all duration-300 text-left ${
                                index === activeTestimonial 
                                    ? 'bg-white shadow-xl scale-105 ring-2 ring-blue-200' 
                                    : 'bg-white/60 hover:bg-white hover:shadow-lg hover:scale-102'
                            }`}
                        >
                            <div className="flex items-center space-x-4">
                                <img 
                                    className="w-12 h-12 object-cover rounded-full border-2 border-white shadow-md" 
                                    src={testimonial.image} 
                                    alt={testimonial.author} 
                                />
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-gray-900 truncate">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500 truncate">{testimonial.role}</p>
                                </div>
                                <div className={`w-3 h-3 rounded-full ${
                                    index === activeTestimonial 
                                        ? `bg-gradient-to-r ${getColorClasses(testimonial.color).gradient}` 
                                        : 'bg-gray-300'
                                }`}></div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EnhancedTestimonials;