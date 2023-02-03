import React, { useEffect, useState, useMemo } from "react";
import { Select, MenuItem } from "@mui/material";
import _ from "lodash";
import {
  useMainCategories,
  useSubCategoriesFromMainCategories,
} from "@/hooks/category.hook";

const Category = ({ query, setQuery }) => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const { data: categories } = useMainCategories();
  const { data: subCategories } = useSubCategoriesFromMainCategories(category);

  useEffect(() => {
    if (subCategories?.data?.length === 0 && category) {
      setQuery((pre) => ({ ...pre, category: category }));
      setSubCategory("");
    }
  }, [subCategories]);

  useEffect(() => {
    if (subCategory) setQuery((pre) => ({ ...pre, category: subCategory }));
  }, [subCategory]);

  const categoriesOptions = useMemo(
    () =>
      categories?.data.map((item) => ({
        label: item.name,
        value: item.id,
      })),
    [categories]
  );

  const subCategoriesOptions = useMemo(
    () =>
      subCategories?.data.map((item) => ({
        label: item.name,
        value: item.id,
      })),
    [subCategories]
  );

  useEffect(() => {
    !query.category && setSubCategory("");
    !query.category && setCategory("");
  }, [query]);

  return (
    <>
      <Select
        sx={Styles.selectStyle}
        MenuProps={MenuProps}
        displayEmpty
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        renderValue={(selected) =>
          selected
            ? categoriesOptions?.filter((ele) => ele.value === category)[0]
                ?.label
            : "Category"
        }
      >
        {categoriesOptions?.map((item) => {
          return (
            <MenuItem key={item?.value} value={item?.value}>
              {item?.label}
            </MenuItem>
          );
        })}
      </Select>
      <Select
        sx={Styles.selectStyle}
        MenuProps={MenuProps}
        displayEmpty
        value={subCategory}
        onChange={(e) => setSubCategory(e.target.value)}
        renderValue={(selected) =>
          selected
            ? subCategoriesOptions?.filter(
                (ele) => ele.value === subCategory
              )[0]?.label
            : "Sub Category"
        }
      >
        {subCategoriesOptions?.map((item) => {
          return (
            <MenuItem key={item?.value} value={item?.value}>
              {item?.label}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};

export default React.memo(Category);

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: "40vh",
    },
  },
};

const Styles = {
  selectStyle: {
    width: "150px",
    backgroundColor: "#fff",
    color: "text.A1A1A1",
    borderRadius: "8px",

    "& .MuiOutlinedInput-input": {
      padding: "10.5px",
    },

    "& fieldset": {
      borderWidth: 0,
      borderRadius: "8px",
    },
  },
};
