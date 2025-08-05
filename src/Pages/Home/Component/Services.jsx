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
        image: Elbow, // import this image like the others
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
