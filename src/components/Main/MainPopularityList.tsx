import { MainCardList } from '../../components'
const MainPopularityList = () => {
  return (
    <section className='padding-lr-16'>
      <div className='flex items-center justify-between mb-8 '>
        <div className='text-lg font-bold'>인기 여행지</div>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M9.70005 18L8.30005 16.6L12.9 12L8.30005 7.4L9.70005 6L15.7 12L9.70005 18Z'
              fill='#666666'
            />
          </svg>
        </div>
      </div>
      <div>
        <MainCardList />
      </div>
    </section>
  )
}
export default MainPopularityList
