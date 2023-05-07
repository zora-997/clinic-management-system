
import DetailBodyBox from './DetailBodyBox';
import DetailBodyInput from './DetailBodyInput';
import DetailBodyTop from './DetailBodyTop';
import DetailHeader from './DetailHeader';



const Detail = () => {


    return (
        <div className="flex flex-col items-end  pb-5  w-full select-none font-body   ">

            {/** body  */}
            <div className=' font-body flex flex-col p-3 bg-white mr-5 w-[68rem]'>

                <DetailHeader />
                <DetailBodyTop />
                <DetailBodyInput />
                <DetailBodyBox />

            </div>


        </div>
    )
}

export default Detail