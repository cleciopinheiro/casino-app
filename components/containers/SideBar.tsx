import Image from 'next/image';
import Menu from '../../constants/Menu';
import Logomarca from '@/public/Logomarca.svg';

function SideBar() {
  return (
    <div className="fixed top-0 left-0 flex flex-col gap-12 w-[20vw] h-screen bg-[var(--dark-50)] px-8 py-4">
      <div className=''>
        <Image src={Logomarca} alt="Logomarca" width={140} height={60} />
      </div>
      <div className='flex flex-col gap-6'>
        {
        Menu.map((item: any) => {
          return (
              <div key={item.name} className="flex items-center gap-2 text-[var(--gray)] cursor-pointer">
                {item.icon}
                <span>{item.name}</span>
              </div>
            );
          })
        } 
      </div>
    </div>
  );
}

export default SideBar;