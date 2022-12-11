// eslint-disable-next-line quotes
import { MainFilterProps } from './types'

const MainFilter = ({ selects, onClickTaste }: MainFilterProps) => {
  const classStyle = ''
  return (
    <section className='flex-center-start margint-tb-12 padding-lr-16  gap-8'>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M11 21V15H13V17H21V19H13V21H11ZM3 19V17H9V19H3ZM7 15V13H3V11H7V9H9V15H7ZM11 13V11H21V13H11ZM15 9V3H17V5H21V7H17V9H15ZM3 7V5H13V7H3Z'
            fill='#222222'
          />
        </svg>
      </div>
      <div className='width-100 over-hidden'>
        <div className='flex-center-start max-width gap-8'>
          <div className={classStyle} onClick={onClickTaste}>
            카페
          </div>
          <div className={classStyle} onClick={onClickTaste}>
            맛집투어
          </div>
          <div className={classStyle} onClick={onClickTaste}>
            자연
          </div>
          <div className={classStyle} onClick={onClickTaste}>
            힐링
          </div>
          <div className={classStyle} onClick={onClickTaste}>
            관광지
          </div>
          <div className={classStyle} onClick={onClickTaste}>
            종교시설
          </div>
          <div className={classStyle} onClick={onClickTaste}>
            쇼핑
          </div>
          <div className={classStyle} onClick={onClickTaste}>
            문화
          </div>
          <div className={classStyle} onClick={onClickTaste}>
            핫플레이스
          </div>
          <div className={classStyle} onClick={onClickTaste}>
            키즈
          </div>
          <div className={classStyle} onClick={onClickTaste}>
            드라이브
          </div>
          <div className={classStyle} onClick={onClickTaste}>
            가성비
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainFilter
