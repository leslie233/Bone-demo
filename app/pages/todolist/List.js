import React from "react";
import { Checkbox } from '@bone/bone-web-ui';
import style from "./index.css";

export default ({ list, onChange, onDelete }) => <ul className={ style.list }>
    {
        list.map(item =>
            <li className={ `${style.item} ${ item.completed ? style.completed : "" }` } key={ item.id }>
                <Checkbox
                    checked={ item.completed }
                    onChange={ checked => onChange(item.id, checked) }
                />
                <span className={ style.name }>{ item.name }</span>
                <a className={ style.delete } onClick={() => onDelete(item.id)}>删除</a>
            </li>
        )
    }
</ul>