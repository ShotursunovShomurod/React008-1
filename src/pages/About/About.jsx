import React, {useEffect} from 'react'
import rasm1 from '../../assets/1.png'
import rasm2 from '../../assets/2.png'
import rasm3 from '../../assets/3.png'
import rasm4 from '../../assets/4.png'
import rasm5 from '../../assets/5.png'
import rasm6 from '../../assets/6.png'
import rasm7 from '../../assets/7.png'
import rasm8 from '../../assets/8.png'

const data = [
  {
    id: 1,
    url: rasm1,
    title: "Мебель",
    desc: "Шкафы и шкафы-купе",
    stel: "Стеллажи и книжные шкафы",
    stol: "Столы",
    sss: "Стулья",
    kkk: "krovati",
    fff: "bolshe"
  },
  {
    id: 2,
    url: rasm2,
    title: "Постельное белье",
    desc: "Одеяла",
    stel: "Комплекты постельного белья",
    stol: "Подушки",
    sss: "Пледы",
    fff: "bolshe"
  },
  {
    id: 3,
    url: rasm3,
    title: "Хранение и порядок",
    desc: "Аксессуары для хранения",
    stel: "Крючки и полки на стенуобувницы, полки с крючками для хранения",
    stol: "Вешалки, обувницы, полки с крючками для хранения",
    sss: "Системы для хранения",
    kkk: "Шкафы и шкафы-купе",
    fff: "bolshe"
  },
  {
    id: 4,
    url: rasm4,
    title: "Аксессуары ",
    desc: "Шкафы и шкафы-купе",
    stel: "Стеллажи и книжные шкафы",
    stol: "Столы",
    sss: "Стулья",
    kkk: "krovati",
    fff: "bolshe"
  },
  {
    id: 5,
    url: rasm5,
    title: "Мебель",
    desc: "Шкафы и шкафы-купе",
    stel: "Стеллажи и книжные шкафы",
    stol: "Столы",
    sss: "Стулья",
    kkk: "krovati",
    fff: "bolshe"
  },
  {
    id: 6,
    url: rasm6,
    title: "Мебель",
    desc: "Шкафы и шкафы-купе",
    stel: "Стеллажи и книжные шкафы",
    stol: "Столы",
    sss: "Стулья",
    kkk: "krovati",
    fff: "bolshe"
  },
  {
    id: 7,
    url: rasm7,
    title: "Мебель",
    desc: "Шкафы и шкафы-купе",
    stel: "Стеллажи и книжные шкафы",
    stol: "Столы",
    sss: "Стулья",
    kkk: "krovati",
    fff: "bolshe"
  },
  {
    id: 8,
    url: rasm8,
    title: "Мебель",
    desc: "Шкафы и шкафы-купе",
    stel: "Стеллажи и книжные шкафы",
    stol: "Столы",
    sss: "Стулья",
    kkk: "krovati",
    fff: "bolshe"
  }
]




const laylo = data?.map((el) => (
  <div key={el.id} className="hover:delay-150	 hover:shadow-lg   cursor-pointer  w-[23%]  flex gap-[40px] py-3 flex-col ">
    <div className=''>
      <img src={el.url} alt="" />
    </div>
    <p className='text-[18px] px-[17px] font-bold'>{el.title}</p>
    <p className='px-[17px]'>{el.desc}</p>
    <p className='px-[17px]'>{el.stel}</p>
    <p className='px-[17px]'>{el.stol}</p>
    <p className='px-[17px]'>{el.sss}</p>
    <p className='px-[17px]'>{el.kkk}</p>
    <p className='px-[17px]'>{el.fff}</p>
  </div>
))


const About = () => {

  useEffect(()=>{
    window.scrollTo(0, 0)
}, [])

  return (
    <>
      <div className='container'>
        <div className='flex flex-wrap w-[100%] justify-between mt-[61px] [100px'>{laylo}</div>
      </div>
    </>
  )
}

export default About