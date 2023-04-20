
import DetailBodyBox from './DetailBodyBox';
import DetailBodyInput from './DetailBodyInput';
import DetailBodyTop from './DetailBodyTop';
import DetailHeader from './DetailHeader';



const Detail = () => {


    return (
        <div className="relative left-[18rem] top-2 mb-5 w-[1010px]  select-none font-body rounded-md bg-white shadow-md  px-3  pl-5 ">

            {/** body  */}
            <div className='mt-2 font-body flex flex-col  my-4 w-[60rem]'>

                <DetailHeader />
                <DetailBodyTop />
                <DetailBodyInput />
                <DetailBodyBox />

            </div>


        </div>
    )
}

export default Detail