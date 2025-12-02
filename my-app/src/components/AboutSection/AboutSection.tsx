import { useState } from 'react';
import Headshot from '../Headshot/Headshot';
import AboutOverlay from '../AboutOverlay/AboutOverlay';

export default function AboutSection (){

    const [showOverlay, setShowOverlay] = useState<boolean>(false);

    const handleOpenOverlay = () => {
        setShowOverlay(true);
    }

    const handleCloseOverlay = () => {  
        setShowOverlay(false);
    }

    return (
        <div>
            <Headshot onClick={handleOpenOverlay} />
            {showOverlay && <AboutOverlay onClose={handleCloseOverlay} />}
        </div>
    );
}