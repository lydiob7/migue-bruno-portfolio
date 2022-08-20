import clsx from 'clsx';

const BurguerMenu = ({ className, isInverted, ...props }) => (
    <div className={clsx(className, 'h-5 w-7 grid grid-cols-2 cursor-pointer')} {...props}>
        <span className={clsx('h-[3px] col-start-2', isInverted ? 'bg-ciel' : 'bg-darkGreen')}></span>
        <span className={clsx('h-[3px] col-span-2', isInverted ? 'bg-ciel' : 'bg-darkGreen')}></span>
        <span className={clsx('h-[3px]', isInverted ? 'bg-ciel' : 'bg-darkGreen')}></span>
    </div>
);

export default BurguerMenu;
