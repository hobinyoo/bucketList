import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"
// 데이터가져올때
import { useDispatch } from "react-redux";
import { deleteBucket, updateBucket, updateBucketFB, deleteBucketFB} from "./redux/modules/bucket";

const Detail = (props) => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const params = useParams();
    const bucket_index = params.index;
    const bucket_list = useSelector((state) => state.bucket.list);

    return (
        <div>
            <h1 onClick={() => {
                navigate("/")
            }}>{bucket_list[bucket_index] ? bucket_list[bucket_index].text : ""}</h1>
            <button onClick={() => {
                // dispatch(updateBucket(bucket_index));
                dispatch(updateBucketFB(bucket_list[bucket_index].id))
                navigate("/")
            }}>완료하기</button>
            <button onClick={() => {
                // dispatch(deleteBucket(bucket_index));
                dispatch(deleteBucketFB(bucket_list[bucket_index].id));
                navigate("/")
            }}>삭제하기</button>
        </div>
    )


};

export default Detail;