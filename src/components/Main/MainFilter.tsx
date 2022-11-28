// eslint-disable-next-line quotes
import { MainFilterProps } from './types'

const MainFilter = ({ selects, onClickTaste }: MainFilterProps) => {
  const classStyle = 'w-max rounded-full bg-slate-300 p-2.5'
  return (
    <div className='flex flex-row w-max'>
      <div className={classStyle} onClick={onClickTaste}></div>
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
  )
}

export default MainFilter
