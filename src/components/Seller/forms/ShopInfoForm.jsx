/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { FiUpload } from 'react-icons/fi'
import { ImSpinner2 } from 'react-icons/im'
import { ImageUploading } from 'react-images-uploading'

const ShopInformationForm = ({
    errors,
    logoImages,
    setLogoImages,
    bannerImages,
    setBannerImages,
    vendorImages,
    setVendorImages,
}) => {
    const { register } = useFormContext()
    const [isLoading, setIsLoading] = useState(false)

    // Handle image change directly without Controller
    const handleImageChange = (setImages, onChange, imageList) => {
        setIsLoading(true) // Start loading
        setImages(imageList)
        onChange(imageList[0]?.file)
        setTimeout(() => {
            setIsLoading(false) // End loading after upload simulation
        }, 1500)
    }

    // return <p>Shop info form</p>

    return (
        <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg flex-grow">
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-center lg:text-left">
                Shop Information
            </h2>
            <div className="mb-4">
                <label className="input-label">Vendor Image</label>
                {/* <Controller
                    control={control}
                    name="vendorImage"
                    render={({ field }) => (
                        <ImageUploading
                            value={vendorImages}
                            onChange={(imageList) => {
                                setVendorImages(imageList)
                                field.onChange(imageList[0]?.file)
                            }}
                            dataURLKey="data_url"
                        >
                            {({ imageList, onImageUpload }) => (
                                <div className="upload__image-wrapper">
                                    <button
                                        type="button"
                                        onClick={onImageUpload}
                                        className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-gray-400 rounded-md cursor-pointer"
                                    >
                                        {imageList.length > 0 ? (
                                            <img
                                                src={imageList[0]['data_url']}
                                                alt="Vendor image Preview"
                                                className="w-full h-full object-cover rounded-md"
                                            />
                                        ) : (
                                            <>
                                                <FiUpload className="text-gray-400" />
                                                <span className="text-gray-400">
                                                    Upload File
                                                </span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            )}
                        </ImageUploading>
                    )}
                /> */}
            </div>

            {/* <div className="mb-4">
                <label className="input-label">Shop Logo</label>
                <Controller
                    control={control}
                    name="logo"
                    render={({ field }) => (
                        <ImageUploading
                            value={logoImages}
                            onChange={(imageList) => {
                                setLogoImages(imageList)
                                field.onChange(imageList[0]?.file)
                            }}
                            dataURLKey="data_url"
                        >
                            {({ imageList, onImageUpload }) => (
                                <div className="upload__image-wrapper">
                                    <button
                                        type="button"
                                        onClick={onImageUpload}
                                        className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-gray-400 rounded-md cursor-pointer"
                                    >
                                        {imageList.length > 0 ? (
                                            <img
                                                src={imageList[0]['data_url']}
                                                alt="Logo Preview"
                                                className="w-full h-full object-cover rounded-md"
                                            />
                                        ) : (
                                            <>
                                                <FiUpload className="text-gray-400" />
                                                <span className="text-gray-400">
                                                    Upload File
                                                </span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            )}
                        </ImageUploading>
                    )}
                />
            </div> */}

            <div className="mb-4">
                <label className="input-label">Shop Name</label>
                <input
                    {...register('shopName')}
                    type="text"
                    className={`input ${
                        errors.shopName ? 'border-red-500' : ''
                    }`}
                    placeholder="Ex: XYZ store"
                />
                {errors.shopName && (
                    <p className="text-red-500 text-xs italic">
                        {errors.shopName.message}
                    </p>
                )}
            </div>
            <div className="mb-4">
                <label className="input-label">Shop Address</label>
                <input
                    {...register('address')}
                    type="text"
                    className={`input ${
                        errors.address ? 'border-red-500' : ''
                    }`}
                    placeholder="Shop address"
                />
                {errors.address && (
                    <p className="text-red-500 text-xs italic">
                        {errors.address.message}
                    </p>
                )}
            </div>
            <div className="mb-4">
                <label className="input-label">Shop Banner</label>
                <ImageUploading
                    value={bannerImages}
                    onChange={(imageList) =>
                        handleImageChange(setBannerImages, () => {}, imageList)
                    }
                    dataURLKey="data_url"
                >
                    {({ imageList, onImageUpload }) => (
                        <div className="upload__image-wrapper">
                            <button
                                type="button"
                                onClick={onImageUpload}
                                className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-gray-400 rounded-md cursor-pointer"
                            >
                                {isLoading ? (
                                    <ImSpinner2
                                        className="animate-spin text-gray-400"
                                        size={24}
                                    />
                                ) : imageList.length > 0 ? (
                                    <img
                                        src={imageList[0]['data_url']}
                                        alt="Shop Banner Preview"
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                ) : (
                                    <>
                                        <FiUpload
                                            className="text-gray-400"
                                            size={24}
                                        />
                                        <span className="text-gray-400">
                                            Upload File
                                        </span>
                                    </>
                                )}
                            </button>
                        </div>
                    )}
                </ImageUploading>
            </div>
        </div>
    )
}

export default ShopInformationForm
