import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/product/action";

import CardItems from "../../components/CardItems";
import Loading from "../../commons/Loading";
import Error from "../../commons/Error";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import "./style.css";


export default function Products() {
  const { loading, data, error } = useSelector((state) => state.product);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProducts(
        search?.length > 1 ? search?.trim().toLocaleLowerCase() : "",
        pageNumber
      )
    );
  }, [dispatch, search, pageNumber]);

  const handleNavigationDetailPage = (id) => {
    navigation(`/product/${id}`);
  };

  const handlePreviousPageClick = () => {
    setPageNumber(Number(pageNumber) - 1);
    window.scroll({
      top: document.body.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleNextPageClick = () => {
    setPageNumber(Number(pageNumber) + 1);
    window.scroll({
      top: document.body.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="flex">
      <div className="input-search-bar">
        <input
          style={{
            border: "none",
            width: 250,
            marginLeft: 10,
            outline: "none",
          }}
          placeholder="search for Product"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: 80,
        }}
      >
        {data.map((products) => (
          <CardItems
            setSearch={setSearch}
            search={search}
            key={products.id}
            handleNavigate={handleNavigationDetailPage}
            product={products}
          />
        ))}
      </div>
      <div className="paginatePage">
        <div
          className="paginateNextAndPreviousPage"
          onClick={handlePreviousPageClick}
        >
          {<ArrowLeftIcon />}
        </div>

        <h3 style={{ marginTop: 15 }}>{pageNumber}</h3>
        {data.length !== 0 ? (
          <div
            className="paginateNextAndPreviousPage"
            onClick={handleNextPageClick}
          >
            {<ArrowRightIcon />}
          </div>
        ) : null}
      </div>
    </div>
  );
}
