import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const MainStyles = createGlobalStyle` 
    .relative{position:relative}
    .absolute{position:absolute}
    .fixed{position:fixed}
    
    .flex-center-between {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .flex-center-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .flex-center-start {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .gap-8{gap:8px}
    .gap-9{gap:9px}
    .gap-10{gap:10px}
    .gap-20{gap:20px}
    .gap-21{gap:21px}
    .gap-22{gap:22px}
    .gap-23{gap:23px}
    .gap-24{gap:24px}
    .gap-25{gap:25px}
    .gap-26{gap:26px}
    .gap-27{gap:27px}
    .gap-28{gap:28px}
    .gap-29{gap:29px}
    .gap-30{gap:30px}
    .gap-40{gap:40px}
    .gap-50{gap:50px}
    .gap-60{gap:60px}
    .gap-70{gap:70px}
    .gap-80{gap:80px}
    .gap-90{gap:90px}
    .width-100{width:100%}
    .max-width{width:max-content}
    .over-hidden{overflow: scroll}

    .margint-tb-10{margin:10px 0}
    .margint-tb-11{margin:11px 0}
    .margint-tb-12{margin:12px 0}
    .margint-tb-13{margin:13px 0}
    .margint-tb-14{margin:14px 0}
    .margint-tb-15{margin:15px 0}
    .margint-tb-16{margin:16px 0}
    .margint-tb-17{margin:17px 0}
    .margint-tb-18{margin:18px 0}
    .margint-tb-19{margin:19px 0}
    .margint-tb-20{margin:10px 0}

    .margin-b-10{margin-bottom:10px}
    .margin-b-11{margin-bottom:11px}
    .margin-b-12{margin-bottom:12px}
    .margin-b-13{margin-bottom:13px}
    .margin-b-14{margin-bottom:14px}
    .margin-b-15{margin-bottom:15px}
    .margin-b-16{margin-bottom:16px}
    .margin-b-17{margin-bottom:17px}
    .margin-b-18{margin-bottom:18px}
    .margin-b-19{margin-bottom:19px}
    .margin-b-20{margin-bottom:20px}

    .padding-lr-10{padding:0 10px}
    .padding-lr-11{padding:0 11px}
    .padding-lr-12{padding:0 12px}
    .padding-lr-13{padding:0 13px}
    .padding-lr-14{padding:0 14px}
    .padding-lr-15{padding:0 15px}
    .padding-lr-16{padding:0 16px}
    .padding-lr-17{padding:0 17px}
    .padding-lr-18{padding:0 18px}
    .padding-lr-19{padding:0 19px}
    .padding-lr-20{padding:0 20px}

    .bottom-0{bottom:0}
  
`

export default MainStyles
