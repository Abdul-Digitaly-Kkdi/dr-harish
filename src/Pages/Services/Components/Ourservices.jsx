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
        title: 'Joint Replacement Surgery: Reliable Pain Relief',
        image: joint,
        description: [
            "We've got a full range of joint replacement solutions for those coping with severe arthritis, joint damage, or long-term mobility issues. Our experienced joint replacement surgeons carry out both partial and total joint replacement surgery using latest implants and minimally invasive techniques wherever possible.",
            "As one of the best joint replacement doctors in Trichy, we put our focus on restoring joint function, reducing pain, and generally improving our patients' quality of life - all through proper planning and structured after-care."
        ],
    },
    {
        title: 'Knee Arthroscopy & Effective Knee Pain Treatment',
        image: knee,
        description: [
            "Our centre specialises in knee arthroscopy to sort out ligament injuries, cartilage problems, meniscus tears, and other sports-related knee issues. This minimally invasive procedure lets us make a diagnosis and get you back on your feet a whole lot faster than traditional surgery.",
            "If you're struggling with knee pain, our leading orthopaedics knee specialist is here to help. We're the go-to team for knee arthroscopy in Trichy - and we do it all with precision, minimal downtime, and long term joint stability that really makes a difference."
        ],
    },
    {
        title: 'Shoulder Arthroscopy & Shoulder Pain Treatment',
        image: shoulder,
        description: [
            "We offer shoulder arthroscopy for conditions like rotator cuff tears, frozen shoulder, instability, and sports injuries. When it comes to shoulder pain treatment we're all about identifying the root cause and using the least invasive methods possible to get you moving again.",
            "We're the reliable shoulder arthroscopy specialists in Trichy - and our aim is to reduce pain, build strength, and get you back on track with your exercise routine as quickly as possible."
        ],
    },
    {
        title: 'Hip Arthroscopy Services: Restoring Hip Function',
        image: hip,
        description: [
            "Our centre offers advanced hip arthroscopy for labral tears, hip impingement, and early joint degeneration. Each procedure is carried out by a top hip arthroscopy surgeon using the latest arthroscopic techniques for guaranteed results.",
            "We're a trusted source for hip arthroscopic surgery in Trichy - helping patients like you get back to their active lives with natural hip movement, minimal surgical trauma and quick recovery times."
        ],
    },
    {
        title: 'Wrist Arthroscopy & Wrist Pain Treatment',
        image: Elbow, // import this image like the others
        description: [
            "We deliver wrist arthroscopy for chronic wrist pain, instability and wrist ligament tears caused by sports injuries or overuse. Our wrist pain treatment approach is all about preserving the joint and getting you moving properly again.",
            "We're the team you can depend on for wrist arthroscopy in Trichy - offering minimally invasive procedures that speed up healing and get your hands back to normal in no time."
        ],
    },
    {
        title: 'Ankle Arthroscopy & Foot Pain Treatment',
        image: Wrist, // import this image like the others
        description: [
            "Our services include ankle arthroscopy for ligament damage, cartilage injuries, and chronic ankle instability. We give you accurate foot pain treatment and expert care for ankle ligament tears that are caused by sports injuries or accidents.",
            "We're the reliable ankle surgeons in Trichy, and our focus is on restoring ankle stability, reducing pain and getting you moving again with minimal disruption to your daily routine or sports activities."
        ],
    },
    {
        title: 'Elbow Arthroscopy & Elbow Pain Solutions',
        image: Hand, // import this image
        description: [
            "We provide top-notch elbow arthroscopy to tackle the sorts of problems that come up in sport, as well as stiffness and that's sometimes caused by a torn elbow ligament. our expert elbow pain treatment will get your joint moving smoothly again, and prevent long-term damage.",
            "We do our procedures in a super clean and precise way, so you'll feel less pain afterwards, heal faster and be able to get back to being active sooner."
        ],
    },
    {
        title: 'Wrist & Hand Arthroscopy Services',
        image: Ankle, // import this image
        description: [
            "we offer advanced wrist and hand arthroscopy for all the common sorts of problems like nerves getting squished, ligaments getting damaged, stiff joints and long-term chronic hand pain. and we're a team of experienced hand and wrist arthroscopy specialists, so you can be confident that you're getting the best care - and we always put restoration of function right at the top of our list.",
            "we're the reliable choice for hand pain treatment in Trichy, and we get a lot of praise for being one of the top wrist arthroscopy doctors in Trichy, because we take the time to work with you to come up with a solution that's just right for you, and really delivers the lasting results you need to enjoy proper hand mobility once again."
        ],
    },
];

const Ourservices = () => {
    return (
        <div className="bg-background-color/50 py-12 px-4 md:px-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <p className="text-3xl md:text-4xl text-yellow-600 font-semibold tracking-widest mb-10 text-center ">Our Services</p>

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

export default Ourservices;
