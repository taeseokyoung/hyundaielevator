import { useEffect, useState } from "react"
import styled from "styled-components";

const FLINK = [
    { id: 0, name: "Family Link", link: "" },
    { id: 1, name: "현대아산", link: "https://www.hdasan.com/main" },
    { id: 2, name: "현대무벡스", link: "https://www.hyundaimovex.com/" },
    { id: 3, name: "현대경제연구원", link: "http://www.hri.co.kr/" },
];

const Select = styled.select`
background: #444;
color:#fff;
padding: 0 15px;
`

const FamilyLink = () => {
    const [flnk, setflnk] = useState();

    useEffect(() => {
        flnk && window.open(flnk);
    }, [flnk])

    return (
        <Select onChange={(e) => setflnk(e.target.value)}>
            {
                FLINK.map(link => <option value={link.link} key={link.id}>{link.name}</option>)
            }
        </Select>
    )
}

export default FamilyLink;