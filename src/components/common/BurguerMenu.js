import clsx from 'clsx';

const BurguerMenu = ({ className, isHeaderInverted, ...props }) => (
    <div className={clsx(className, 'h-5 w-7 grid grid-cols-2 cursor-pointer')} {...props}>
        <span className={clsx('h-[3px] col-start-2', isHeaderInverted ? 'bg-ciel' : 'bg-darkGreen')}></span>
        <span className={clsx('h-[3px] col-span-2', isHeaderInverted ? 'bg-ciel' : 'bg-darkGreen')}></span>
        <span className={clsx('h-[3px]', isHeaderInverted ? 'bg-ciel' : 'bg-darkGreen')}></span>
    </div>
);

export default BurguerMenu;
