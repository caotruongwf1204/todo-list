import React, { useContext } from "react";
import "./Filter.css";
import { TodoContext } from "../Context/TodoContext";

const Filter = () => {
  const {filter,onFilter} = useContext(TodoContext);
  const handleStatusChange = (e) => {
    onFilter("status", e.target.value);
  };

  const handleColorChange = (e) => {
    const name = e.target.name;
    const check = e.target.checked;
    const value = e.target.value;

    let newColors;

    if (check) {
      newColors = [...filter.color, value];
    } else {
      newColors = filter.color.filter((color) => color !== value);
    }

    onFilter(name, newColors);
  };

  return (
    <>
      <div className="filter">
        <div className="footer-column">
          <div className="footer-heading">Filter by status</div>

          <form className="filter-by-status">
            <div className="filter-item">
              <input
                type="radio"
                name="status"
                id="all"
                value="all"
                checked={filter.status === "all"}
                onChange={handleStatusChange}
              />
              <label htmlFor="all">All</label>
            </div>

            <div className="filter-item">
              <input
                type="radio"
                name="status"
                id="completed"
                value="completed"
                checked={filter.status === "completed"}
                onChange={handleStatusChange}
              />
              <label htmlFor="completed">Completed</label>
            </div>

            <div className="filter-item">
              <input
                type="radio"
                name="status"
                id="active"
                value="active"
                checked={filter.status === "active"}
                onChange={handleStatusChange}
              />
              <label htmlFor="active">Active</label>
            </div>
          </form>
        </div>

        <div className="footer-column">
          <div className="footer-heading">Filter by color</div>

          <form className="filter-by-color">
            <div className="filter-item">
              <input
                type="checkbox"
                name="color"
                id="green"
                value="green"
                checked={filter.color.includes("green")}
                onChange={handleColorChange}
              />
              <label htmlFor="green">Green</label>
            </div>

            <div className="filter-item">
              <input
                type="checkbox"
                name="color"
                id="blue"
                value="blue"
                checked={filter.color.includes("blue")}
                onChange={handleColorChange}
              />
              <label htmlFor="blue">Blue</label>
            </div>

            <div className="filter-item">
              <input
                type="checkbox"
                name="color"
                id="yellow"
                value="yellow"
                checked={filter.color.includes("yellow")}
                onChange={handleColorChange}
              />
              <label htmlFor="yellow">Yellow</label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Filter;
