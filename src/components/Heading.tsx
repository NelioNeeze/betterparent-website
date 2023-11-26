import type { NextPage } from "next";
import style from "../styles/components/heading.module.css";
import { getCategories } from "../services/categoryService";
import { useQuery } from "@tanstack/react-query";
import { FormControl, InputLabel, Select, MenuItem, Typography } from "@mui/material";


type HeaderType = {
    dropdown?: boolean
    text?: string
    onCategoryChange?: (category: string) => void; 
}

const Heading: NextPage<HeaderType> = ({
    dropdown = false, 
    text = "No Title",
    onCategoryChange
}) => {

    var select = (<></>)

    if(dropdown) {
        const { data: categories } = useQuery({
            queryKey: ["categories"],
            queryFn: () => getCategories(),
        })

        select = (
            <FormControl>
                <InputLabel id="demo-simple-select-label">Filtern nach ...</InputLabel>
                <Select
                    id="category"
                    label="Filtern nach ..."
                    defaultValue="Alles"
                    className={style.select}
                    onChange={(e) => {
                        const selectedCategory = e.target.value;
                        onCategoryChange?.(selectedCategory);
                    }}
                >
                    <MenuItem value="Alles">Alle Kategorien</MenuItem>
                    {categories?.map((category: any) => (
                        <MenuItem 
                            value={category.attributes.name}
                            key={category.id}
                            >{category.attributes.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        )
    }

    return (
        <div className={style.header}>
            <Typography variant="h4">{text}</Typography>
            {select}
        </div> 
    );
};

export default Heading;

