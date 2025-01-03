import { useState } from 'react'
import Loader from '../../../components/Loader'
import { useGetVendorsQuery } from '../../../redux/slices/vendorsApiSlice'
import StoreList from '../../../components/Seller/StoreList'
import TablePagination from '@mui/material/TablePagination'
import { useSearchParams } from 'react-router-dom'

// const VendorsPage = () => {
//     const [keywords, setKeywords] = useState('')
//     const [searchParams, setSearchParams] = useSearchParams()

//     const [currentPage, setCurrentPage] = useState(
//         parseInt(searchParams.get('page'), 10) - 1 || 0
//     ) // Sync with URL, 0-based index
//     const [rowsPerPage, setRowsPerPage] = useState(12)

//     const { data, isFetching } = useGetVendorsQuery({
//         page: currentPage + 1, // API expects 1-based indexing
//         limit: rowsPerPage,
//     })

//     const handleInputChange = (e) => {
//         const keywords = e.target.value
//         setKeywords(keywords)
//         setCurrentPage(0)
//     }

//     // Handle page change
//     const handleChangePage = (_, newPage) => {
//         setCurrentPage(newPage)
//         setSearchParams({
//             page: newPage + 1,
//         })
//         window.scrollTo({ top: 0, behavior: 'smooth' }) // Scroll to top
//     }

//     // Handle rows per page change
//     const handleChangeRowsPerPage = (event) => {
//         const newRowsPerPage = parseInt(event.target.value, 10)
//         setRowsPerPage(newRowsPerPage)
//         setCurrentPage(0) // Reset to the first page
//         setSearchParams({
//             page: 1, // Reset page to 1
//         })
//     }

//     return (
//         <div>
//             <div className="bg-primary-100 p-4 lg:p-8 rounded-lg flex lg:flex-row flex-col gap-2 justify-between items-center mb-4">
//                 <div>
//                     <h2 className="text-2xl uppercase font-bold text-primary-400">
//                         ALL STORES
//                     </h2>
//                     <p className="text-base text-primary-400">
//                         Find your desired stores and shop your favourite
//                         products
//                     </p>
//                 </div>
//                 <div className="flex items-center">
//                     <input
//                         type="text"
//                         className="flex-grow p-2 border outline-none focus:border-primary-100 rounded rounded-r-none"
//                         placeholder="Search Store"
//                         value={keywords}
//                         onChange={handleInputChange}
//                     />
//                     <button className="p-2 bg-primary-400 text-white rounded rounded-l-none outline-none border-none">
//                         Search
//                     </button>
//                 </div>
//             </div>
//             {isFetching ? (
//                 <Loader />
//             ) : data && data?.doc ? (
//                 <div className="mb-4">
//                     {data?.resutls > 0 ? (
//                         <StoreList sellers={data?.doc} />
//                     ) : (
//                         keywords && (
//                             <p className="w-full bg-blue-50 text-lg p-8">
//                                 This Store{' '}
//                                 <span className="font-bold">{`"${keywords}"`}</span>{' '}
//                                 not found!.. Please try another keywords`
//                             </p>
//                         )
//                     )}
//                     {data?.totalDocs > rowsPerPage && (
//                         <TablePagination
//                             component="div"
//                             count={data?.totalDocs}
//                             page={currentPage}
//                             onPageChange={handleChangePage}
//                             rowsPerPage={rowsPerPage}
//                             onRowsPerPageChange={handleChangeRowsPerPage}
//                             rowsPerPageOptions={[12, 24, 36, 60]}
//                         />
//                     )}
//                 </div>
//             ) : (
//                 <p>Stores not found!</p>
//             )}
//         </div>
//     )
// }

const VendorsPage = () => {
    const [keywords, setKeywords] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()

    const [currentPage, setCurrentPage] = useState(
        parseInt(searchParams.get('page'), 12) - 1 || 0
    ) // Sync with URL, 0-based index
    const [rowsPerPage, setRowsPerPage] = useState(20)

    const { data, isFetching } = useGetVendorsQuery({
        page: currentPage + 1, // API expects 1-based indexing
        limit: rowsPerPage,
    })

    // const handleInputChange = (e) => {
    //     const newKeywords = e.target.value
    //     setKeywords(newKeywords)
    //     setCurrentPage(0) // Reset to first page when searching
    //     setSearchParams({
    //         page: 1, // Reset page to 1
    //     })
    // }

    const handleChangePage = (_, newPage) => {
        setCurrentPage(newPage)
        setSearchParams({
            page: newPage + 1,
        })
        window.scrollTo({ top: 0, behavior: 'smooth' }) // Scroll to top
    }

    const handleChangeRowsPerPage = (event) => {
        const newRowsPerPage = parseInt(event.target.value, 10)
        setRowsPerPage(newRowsPerPage)
        setCurrentPage(0) // Reset to first page
        setSearchParams({
            page: 1, // Reset page to 1
        })
    }

    return (
        <div>
            <div className="bg-primary-100 p-4 lg:p-8 rounded-lg flex lg:flex-row flex-col gap-2 justify-between items-center mb-4">
                <div>
                    <h2 className="text-2xl uppercase font-bold text-primary-400">
                        ALL STORES
                    </h2>
                    <p className="text-base text-primary-400">
                        Find your desired stores and shop your favourite
                        products
                    </p>
                </div>
                {/* <div className="flex items-center">
                    <input
                        type="text"
                        className="flex-grow p-2 border outline-none focus:border-primary-100 rounded rounded-r-none"
                        placeholder="Search Store"
                        value={keywords}
                        onChange={handleInputChange}
                    />
                    <button className="p-2 bg-primary-400 text-white rounded rounded-l-none outline-none border-none">
                        Search
                    </button>
                </div> */}
            </div>
            {isFetching ? (
                <Loader />
            ) : data ? (
                <div className="mb-4">
                    {data?.results > 0 ? (
                        <StoreList sellers={data?.doc} />
                    ) : (
                        keywords && (
                            <p className="w-full bg-blue-50 text-lg p-8">
                                This Store{' '}
                                <span className="font-bold">{`"${keywords}"`}</span>{' '}
                                not found! Please try another keyword.
                            </p>
                        )
                    )}
                    {data?.totalDocs > rowsPerPage && (
                        <TablePagination
                            component="div"
                            count={data?.totalDocs}
                            page={currentPage}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            rowsPerPageOptions={[20, 40, 100]}
                        />
                    )}
                </div>
            ) : (
                <p>Stores not found!</p>
            )}
        </div>
    )
}

export default VendorsPage
