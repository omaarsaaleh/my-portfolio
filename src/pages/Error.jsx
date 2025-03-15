export default function Error(){
    return(
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
            <p style={{fontSize:'6rem'}}>😕</p>
            <p className="text-xl">Oops! Unexpected error happened, Please try again later.</p>
        </div>
    )
}