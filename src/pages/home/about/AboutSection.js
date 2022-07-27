import React, { useEffect, useRef, useState } from 'react';
import AboutOne from './AboutOne';
import AboutTwo from './AboutTwo';
import AboutThree from './AboutThree.js';
import AboutFour from './AboutFour';

const About = ({ setIsHeaderInverted, ...props }) => {
    const $scrollAreaRef = useRef(null);
    const $aboutOneRef = useRef(null);
    const $aboutTwoRef = useRef(null);
    const $aboutThreeRef = useRef(null);
    const $aboutFourRef = useRef(null);

    const [visibleSkillGroup, setVisibleSkillGroup] = useState(1);

    useEffect(() => {
        const scrollAreaVariable = $scrollAreaRef.current;
        const scrollAreaWidth = scrollAreaVariable.getBoundingClientRect().width;
        scrollAreaVariable?.addEventListener('scroll', (ev) => {
            const firstSectionLeft = $aboutOneRef?.current.getBoundingClientRect()?.left;
            const secondSectionLeft = $aboutTwoRef?.current.getBoundingClientRect()?.left;
            const thirdSectionLeft = $aboutThreeRef?.current.getBoundingClientRect()?.left;
            const fourthSectionLeft = $aboutFourRef?.current.getBoundingClientRect()?.left;

            if (firstSectionLeft >= -(scrollAreaWidth / 2)) setVisibleSkillGroup(1);
            else if (secondSectionLeft >= -(scrollAreaWidth / 2)) setVisibleSkillGroup(2);
            else if (thirdSectionLeft >= -(scrollAreaWidth / 2)) setVisibleSkillGroup(3);
            else if (fourthSectionLeft >= -(scrollAreaWidth / 2)) setVisibleSkillGroup(4);
        });

        return () => scrollAreaVariable?.removeEventListener('scroll', () => {});
    }, []);

    useEffect(() => {
        if (visibleSkillGroup === 4) return setIsHeaderInverted(true);
        return setIsHeaderInverted(false);
        // eslint-disable-next-line
    }, [visibleSkillGroup]);

    const handleGroupsScroll = (index) => {
        if ($scrollAreaRef?.current) {
            const scrollAreaWidth = $scrollAreaRef.current.getBoundingClientRect().width;
            const groupLeftOptions = [0, scrollAreaWidth * 1, scrollAreaWidth * 2, scrollAreaWidth * 3];

            $scrollAreaRef.current.scroll(groupLeftOptions[index - 1], 0);
        }
    };

    return (
        <div
            ref={$scrollAreaRef}
            {...props}
            id="bio"
            className="h-screen w-screen overflow-y-hidden overflow-x-scroll snap-x snap-mandatory flex"
        >
            <AboutOne ref={$aboutOneRef} handleGroupsScroll={handleGroupsScroll} />
            <AboutTwo ref={$aboutTwoRef} handleGroupsScroll={handleGroupsScroll} />
            <AboutThree ref={$aboutThreeRef} handleGroupsScroll={handleGroupsScroll} />
            <AboutFour ref={$aboutFourRef} handleGroupsScroll={handleGroupsScroll} />
        </div>
    );
};

export default About;