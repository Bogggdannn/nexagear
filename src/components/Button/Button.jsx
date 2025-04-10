import "./Button.scss"

export function Button({ mod, children, className }) {
    function generateClass() {
        if (!!mod) {
            return `button-${mod}`
        }
    }
    return (
        <div className={`${generateClass()} button-wrapper ${className}`}>
            <button className="button">{children}</button>
            {mod == "primary"
                ?

                <>
                    <span className='button-span-one'></span>
                    <span className='button-span-two'></span>
                    <span className='button-span-three'></span>
                    <span className='button-span-four'></span>
                </>

                : ""}

        </div>
    )
}
