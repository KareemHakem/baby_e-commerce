import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/product/action";

import CardItems from "../../components/CardItems";
import Loading from "../../commons/Loading";
import Error from "../../commons/Error";
import ReactPaginate from "react-paginate";

import "./style.css";

export default function Products() {
  const { loading, data, error } = useSelector((state) => state.product);

  console.log(data?.length, "length");
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [limit] = useState(15);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProducts(
        search?.length > 1 ? search?.trim().toLocaleLowerCase() : "",
        pageNumber,
        limit
      )
    );
  }, [dispatch, search, pageNumber, limit]);

  const handleNavigationDetailPage = (id) => {
    navigation(`/product/${id}`);
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    setPageNumber(selectedPage);
  };

  const offset = pageNumber * limit;

  console.log(offset, "offset");

  const CardBooksView = () => {
    return useMemo(
      () =>
        data
          ?.slice(offset, offset + limit)
          .map((products) => (
            <CardItems
              setSearch={setSearch}
              search={search}
              key={products.id}
              handleNavigate={handleNavigationDetailPage}
              product={products}
            />
          )),
      [search, pageNumber, limit, offset]
    );
  };

  const pageCount = Math.ceil(data?.length / limit);

  console.log(pageCount, "pageCount");
  console.log(data?.length, "data");

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
        <CardBooksView />
      </div>
      <ReactPaginate
        previousLabel={"<-"}
        nextLabel={"->"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"paginatePage"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
}
