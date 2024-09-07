"use client"

const Footer = (props) => {


    return (
        <div className="flex justify-around self-end rounded-t-lg bg-stone-700 w-screen p-2 h-[88px] fixed inset-x-0 bottom-0 ">
            <label className="bg-stone-800 has-[:checked]:bg-stone-900 has-[:checked]:text-slate-100  flex flex-col items-center rounded-lg border-4 border-stone-900 ">
                <input className="hidden" id="radio-1" type="radio" name="radio" value="1" checked={props.state === '1'} onChange={props.onChange} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={props.state === '1' ? 'white' : 'black'} className="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

                <label htmlFor="radio-1" className="">Home</label>
            </label>

            <label className=" bg-stone-800 has-[:checked]:bg-stone-900 has-[:checked]:text-slate-100  flex flex-col items-center rounded-lg border-4 border-stone-900 ">
                <input className="hidden" id="radio-2" type="radio" name="radio" value="2" checked={props.state === '2'} onChange={props.onChange} />
                <svg width="800px" height="800px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" className="size-8">

                    <g stroke={props.state === '2' ? 'white' : 'black'} stroke-width="12" clip-path="url(#a)">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m54 104 42 42 42-42m-42 28V46" />
                        <circle cx="96" cy="96" r="74" />
                    </g>
                    <defs>
                        <clipPath id="a">
                            <path fill="#ffffff" d="M0 0h192v192H0z" />
                        </clipPath>
                    </defs>

                </svg>
                <label htmlFor="radio-2" className="">Upgrade</label>
            </label>

            <label className=" bg-stone-800 has-[:checked]:bg-stone-900 has-[:checked]:text-slate-100  flex flex-col items-center rounded-lg border-4 border-stone-900 ">
                <input className="hidden" id="radio-3" type="radio" name="radio" value="3" checked={props.state === '3'} onChange={props.onChange} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={props.state === '3' ? 'white' : 'black'} className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                </svg>

                <label htmlFor="radio-3" className="">Invite</label>
            </label>

            <label className=" bg-stone-800 has-[:checked]:bg-stone-900 has-[:checked]:text-slate-100  flex flex-col items-center rounded-lg border-4 border-stone-900 ">
                <input className="hidden" id="radio-4" type="radio" name="radio" value="4" checked={props.state === '4'} onChange={props.onChange} />
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-8">
                    <path d="M18 8V7.2C18 6.0799 18 5.51984 17.782 5.09202C17.5903 4.71569 17.2843 4.40973 16.908 4.21799C16.4802 4 15.9201 4 14.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V8M21 12H19C17.8954 12 17 12.8954 17 14C17 15.1046 17.8954 16 19 16H21M3 8V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H3Z" stroke={props.state === '4' ? 'white' : 'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <label htmlFor="radio-4" className="">Wallet</label>
            </label>
        </div>
    );
}

export default Footer