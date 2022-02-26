import React from 'react'
import { RiWindyLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { BiTachometer } from "react-icons/bi";
import { GiWaterDrop } from 'react-icons/gi';
import { BsSun, BsCloudSun, BsCloudy } from "react-icons/bs";
import { WiCloudy } from "react-icons/wi";
import { TiClipboard } from "react-icons/ti";
import { FiSearch } from 'react-icons/fi'
import { RiQuestionMark } from 'react-icons/ri';

    export const icons = {
        wind: RiWindyLine,
        visibility: AiOutlineEye,
        pressure: BiTachometer,
        dew: GiWaterDrop,
        clipboard: TiClipboard,
        search: FiSearch,
        unknown: RiQuestionMark,
        CAVOK: BsSun,
        CLR: BsSun,
        FEW: BsCloudSun,
        SCT: BsCloudSun,
        BKN: BsCloudy,
        OVC: WiCloudy
    }

export default function Icons(props) {

    const handleSymbol = icons.hasOwnProperty(props.symbol) ? icons[props.symbol.toString()] : icons['unknown'];


    const Icon = handleSymbol;

  return  <Icon className={props.className} symbol={props.symbol} />
}
