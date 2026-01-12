import knee from '../../../assets/Services/Knee.jpg';
import shoulder from '../../../assets/Services/Shoulder.jpg';
import hip from '../../../assets/Services/Hip.jpg';
import Elbow from '../../../assets/Services/Elbow.jpg';
import Wrist from '../../../assets/Services/Wrist.jpg';
import Hand from '../../../assets/Services/Hand.jpg';
import Ankle from '../../../assets/Services/Ankle.jpg';
import joint from '../../../assets/Services/joint-replace.webp';
import { FaCheckCircle } from 'react-icons/fa';

const services = [
    {
        title: 'Joint Replacement',
        image: joint,
        description: [
            "Been in the game long enough to know that every patient wanting a joint replacement needs a doctor who'll offer real treatment for their knee or hip problems - treatment that gets them back on their feet as soon as possible and keeps them there for the long haul",
            "You can trust us to be one of the top joint replacement surgeons in Trichy, we've got the latest techniques and we're just as keen on making sure our patients get the best possible care as we are about delivering results - fast recovery times a guarantee"
        ],
        points: [
            'Specialized in knee, hip, and shoulder replacements',
            'Advanced techniques for less pain and faster recovery',
            'High-quality implants for long-lasting results',
            'Personalized pre- and post-surgery care',
            'Helps restore movement, comfort, and confidence',
        ],
    },
    {
        title: 'Knee Arthroscopy',
        image: knee,
        description: [
            "We've got a dedicated specialist in knee arthroscopy who gets it - complex knee problems need a doctor who not only knows what they're doing but has the skills and know-how to get the job done right.",
            "In Trichy, you can count on us to give you reliable treatment for your knee problems - our guy is an expert in orthopaedics and will treat you with the care you need."
        ],
        points: [
            'Meniscus repair or removal (meniscectomy)',
            'Ligament reconstruction (ACL, PCL, MCL, LCL repair)',
            'Cartilage repair or microfracture surgery',
            'Removal of loose bodies (bone or cartilage fragments)',
            'Patella realignment and tracking surgery',
            'Treatment for age-related ligament degeneration',
            'Osteoarthritis treatment by stage',
        ],
    },
    {
        title: 'Shoulder Arthroscopy',
        image: shoulder,
        description: [
            "Say goodbye to chronic pain and hello to a shoulder that moves the way it's meant to. Our minimally invasive shoulder arthroscopy procedures do just that - with precision and care from start to finish.",
            "If you're in Trichy and have shoulder pain that just won't go away, talk to one of our shoulder arthroscopy doctors. We'll work with you to create a plan that gets you results you can feel - lasting results."
        ],
        points: [
            'Rotator cuff repair',
            'Labrum repair (SLAP tear) for athletes',
            'Subacromial decompression (relieving impingement)',
            'Adhesive capsulitis release in diabetic patients',
            'Stabilization for recurrent dislocations',
            'Biceps tendon repair',
        ],
    },
    {
        title: 'Hip Arthroscopy',
        image: hip,
        description: [
            "Advanced procedures by a skilled hip arthroscopy surgeon who really knows their stuff are designed to knock out that pain & get some real movement going in your hip again.",
            "Personal care from one of the reliable hip arthroscopic surgeons in Trichy who really know how to listen & advise, delivered by a seasoned orthopaedics specialist with a ton of experience using the latest techniques."
        ],
        points: [
            'Treatment of femoroacetabular impingement (FAI)',
            'Labral tear repair',
            'Removal of bone spurs & damaged cartilage',
            'Hip joint debridement',
            'Hip joint preservation surgery',
        ],
    },
       {
        title: 'Elbow Arthroscopy',
        image: Elbow, // import this image
        description: [
            "Elbow pain just not letting up? We've got a tailored treatment that's designed to get to the source of the stiffness, instability and elbow ligament tears and sort it out with real precision.",
            "Expert Elbow Arthroscopy procedures are all about getting you back on your feet in no time, with some really pretty impressive recovery times to boot - and joint function that really lasts."
        ],
        points: [
            'Treatment of elbow tendonitis or tennis elbow (lateral epicondylitis)',
            'Removal of loose bodies or bone fragments',
            'Repair of cartilage damage',
            'Elbow ligament reconstruction',
            'Treatment of elbow arthritis',
        ],
    },
    {
        title: 'Wrist Arthroscopy',
        image: Wrist, // import this image like the others
        description: [
            "Effective wrist pain treatment for sports injuries and degeneration that's more than just a quick fix - we can help manage wrist ligament tears with precision too.",
            "Trusted in Trichy for the best in wrist arthroscopy, we deliver tailored care with modern arthroscopic techniques that really get the job done."
        ],
        points: [
            'Treatment for wrist ligament tears (e.g., scapholunate ligament)',
            'Removal of ganglion cysts',
            'Debridement of damaged cartilage',
            'Repair of wrist fractures',
            'Carpal tunnel release',
        ],
    },
   {
        title: 'Wrist and Hand Arthroscopy',
        image: Hand, // import this image
        description: [
            "Expert Wrist and Hand Arthroscopy solutions designed to relieve chronic hand pain treatment and improve joint mobility.",
            "Recognised among reliable Wrist Arthroscopy Doctors in Trichy, providing advanced care by a skilled Orthopaedics hand specialist."
        ],
        points: [
            'Carpal tunnel release',
            'Treatment for tendonitis and tenosynovitis',
            'Joint debridement and synovectomy',
            'Correction of ligament injuries in the hand and wrist',
        ],
    },
    {
        title: 'Ankle Arthroscopy',
        image: Ankle, // import this image
        description: [
            "Personalised foot pain treatment to sort out chronic pain or those nasty acute sports ankle injuries - we operate with precision & care to get you back on your feet.",
            "Trusted in Trichy for modern ankle arthroscopy that puts patients first - our goal is to get you moving & back to the things you love in life."
        ],
        points: [
            'Removal of bone spurs or damaged cartilage',
            'Ankle joint debridement',
            'Ligament repair or reconstruction',
            'Synovectomy (removal of inflamed joint lining)',
            'Treatment for chronic ankle instability',
            'Arthroscopic plantar fascia release in severe plantar fasciitis',
        ],
    },
 
];

const ServicesSection = () => {
    return (
        <div className="bg-background-color/50 py-12 px-4 md:px-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <p className="text-3xl md:text-4xl text-yellow-600 font-semibold tracking-widest mb-2 text-center ">WHAT WE OFFER</p>
                <h2 className="font-semibold text-primary-color mb-10 text-justify md:text-center">
                    Arthroscopy is a minimally invasive surgical procedure that allows our orthopedic specialists to diagnose and treat various joint problems with small incisions, reducing recovery time and improving patient outcomes. Patients are offered the following arthroscopic surgeries
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col" key={idx}>
                            <img src={service.image} alt={service.title} className="w-full h-52 object-cover" />
                            <div className="p-6 space-y-3 flex-1 flex flex-col">
                                <h3 className="text-xl font-semibold text-accent-gold">{service.title}</h3>
                                {service.description && (
                                    <div className="space-y-2 text-sm text-primary-color">
                                        {service.description.map((text, i) => (
                                            <p key={i}>{text}</p>
                                        ))}
                                    </div>
                                )}
                                <ul className="list-none space-y-2 text-gray-700 text-sm flex-1">
                                    {service.points.map((point, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <div>
                                                <FaCheckCircle className="text-accent-red mt-1" />
                                            </div>
                                            <span className='text-primary-color'>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute top-[-80px] right-[-80px] w-60 h-60 border-[30px] border-accent-gold rounded-full opacity-50 -z-10"></div>
            <div className="absolute bottom-[-80px] left-[-80px] w-60 h-60 border-[30px] border-accent-gold rounded-full opacity-50 -z-10"></div>
        </div>
    );
};

export default ServicesSection;
