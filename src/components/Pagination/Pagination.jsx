import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './pagination.module.scss'

const Pagination = ({setPageOffset}) => {
    let {removeUnderline} = styles

    return (
    <ReactPaginate
        pageCount={58}
        className = "fs-4 pagination justify-content-center gap-4 my-5 py-2"
        nextLabel = "Next"
        previousLabel = "Prev"
        nextClassName='bg-dark border border-danger p-2'
        previousClassName='bg-dark border border-danger p-2' 
        pageClassName='page-item'
        pageLinkClassName='page-link text-danger fs-4'
        activeClassName='active'
        activeLinkClassName = 'bg-dark border border-2 border-danger'
        previousLinkClassName = {`${removeUnderline} text-danger`}
        nextLinkClassName = {`${removeUnderline} text-danger`}
        pageRangeDisplayed = {4}
        marginPagesDisplayed = {1}
        onPageChange={(data) => {
            setPageOffset((data.selected) * 20)
        }}
    />
  )
}

export default Pagination