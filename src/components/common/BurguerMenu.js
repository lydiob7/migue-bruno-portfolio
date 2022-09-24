import clsx from 'clsx';

const BurguerMenu = ({ className, isInverted, ...props }) => (
    <div
        className={clsx('app-menu-wrapper h-5 w-7 flex flex-col justify-between cursor-pointer', className)}
        {...props}
    >
        <span className={clsx('app-menu-btn app-menu-btn1 origin-right h-[3px]')}></span>
        <span className={clsx('app-menu-btn app-menu-btn2 origin-right h-[3px]')}></span>
        <span className={clsx('app-menu-btn app-menu-btn3 origin-right h-[3px]')}></span>
    </div>
);

export default BurguerMenu;
