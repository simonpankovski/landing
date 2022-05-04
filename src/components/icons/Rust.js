import * as React from 'react'

function SvgRust({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M39.96 24.628l-1.274-.788c-.01-.125-.023-.248-.036-.371l1.095-1.021a.437.437 0 00-.146-.731l-1.399-.523a16.077 16.077 0 00-.11-.362l.873-1.212a.438.438 0 00-.285-.689l-1.475-.24a12.436 12.436 0 00-.177-.33l.62-1.362a.437.437 0 00-.414-.62l-1.498.053a11.652 11.652 0 00-.236-.287l.344-1.459a.438.438 0 00-.527-.527l-1.458.344c-.095-.08-.19-.16-.288-.237l.053-1.497a.437.437 0 00-.62-.414l-1.36.62c-.11-.06-.22-.12-.332-.178l-.24-1.475a.439.439 0 00-.689-.285l-1.213.872c-.12-.038-.24-.074-.36-.109l-.523-1.4a.438.438 0 00-.731-.145l-1.021 1.095a13.078 13.078 0 00-.371-.036l-.788-1.274a.438.438 0 00-.745 0l-.789 1.274c-.124.01-.248.023-.371.036l-1.021-1.095a.44.44 0 00-.731.146l-.523 1.399c-.121.035-.241.072-.361.11l-1.213-.873a.437.437 0 00-.689.285l-.24 1.475c-.111.058-.222.117-.331.178l-1.36-.62a.437.437 0 00-.62.414l.052 1.497c-.097.078-.193.157-.288.237l-1.458-.344a.44.44 0 00-.527.527l.343 1.459c-.08.094-.159.19-.236.287l-1.497-.052a.438.438 0 00-.414.62l.62 1.36c-.06.11-.12.22-.178.331l-1.475.24a.438.438 0 00-.285.69l.873 1.211c-.038.12-.075.24-.11.361l-1.4.524a.438.438 0 00-.145.73l1.095 1.022c-.013.123-.026.247-.036.37l-1.274.789a.438.438 0 000 .745l1.274.788c.01.124.023.248.036.371l-1.095 1.021a.438.438 0 00.146.731l1.399.523c.035.122.072.242.11.362l-.873 1.212a.438.438 0 00.285.689l1.475.24c.058.111.117.222.178.331l-.62 1.36a.437.437 0 00.414.62l1.496-.052c.079.097.157.193.237.287l-.343 1.46a.436.436 0 00.527.525l1.458-.343c.095.08.19.159.288.236l-.052 1.497a.438.438 0 00.62.414l1.36-.62c.11.061.22.12.33.178l.241 1.475a.437.437 0 00.69.285l1.211-.873c.12.038.24.075.361.11l.524 1.399a.437.437 0 00.73.145l1.022-1.095c.123.014.247.026.37.037l.79 1.274a.438.438 0 00.744 0l.789-1.274c.124-.01.247-.023.37-.037l1.021 1.095a.436.436 0 00.731-.145l.523-1.399c.122-.035.242-.072.362-.11l1.212.873a.439.439 0 00.689-.285l.24-1.475c.111-.058.222-.118.331-.178l1.36.62a.438.438 0 00.62-.414l-.052-1.497c.097-.078.193-.155.287-.236l1.459.343a.436.436 0 00.527-.526l-.344-1.459c.08-.094.16-.19.236-.287l1.497.052a.436.436 0 00.414-.62l-.62-1.36c.06-.11.12-.22.178-.331l1.475-.24a.436.436 0 00.285-.69l-.873-1.211c.038-.12.075-.24.11-.362l1.399-.523a.436.436 0 00.145-.73l-1.094-1.022c.013-.123.025-.247.036-.37l1.273-.789a.437.437 0 000-.745zm-8.524 10.564a.902.902 0 01.378-1.764.902.902 0 01-.378 1.764zm-.432-2.926a.821.821 0 00-.976.631l-.452 2.11a11.043 11.043 0 01-4.576.985c-1.67 0-3.252-.369-4.672-1.029l-.452-2.11a.82.82 0 00-.975-.632l-1.863.4a11.049 11.049 0 01-.963-1.135h9.064c.102 0 .17-.018.17-.112v-3.206c0-.093-.068-.111-.17-.111h-2.651v-2.033h2.867c.261 0 1.399.075 1.763 1.53.114.446.364 1.9.535 2.367.17.522.864 1.565 1.603 1.565h4.517a.92.92 0 00.163-.016c-.313.426-.657.829-1.027 1.205l-1.905-.41zm-12.536 2.882a.903.903 0 01-.378-1.765.902.902 0 01.378 1.765zM15.03 21.206a.9.9 0 11-1.647.731.9.9 0 111.647-.731zm-1.057 2.505l1.94-.862a.823.823 0 00.418-1.085l-.4-.904h1.572v7.085h-3.17a11.1 11.1 0 01-.36-4.234zm8.515-.688v-2.088h3.743c.193 0 1.365.223 1.365 1.1 0 .727-.898.988-1.638.988h-3.47zm13.602 1.88c0 .277-.01.55-.03.823h-1.138c-.114 0-.16.075-.16.186v.523c0 1.23-.693 1.497-1.3 1.566-.58.065-1.221-.243-1.3-.597-.342-1.92-.91-2.33-1.81-3.039 1.116-.708 2.276-1.753 2.276-3.15 0-1.51-1.035-2.461-1.74-2.928-.99-.652-2.086-.783-2.382-.783H16.74a11.076 11.076 0 016.204-3.501l1.387 1.455a.82.82 0 001.161.027L27.043 14a11.1 11.1 0 017.593 5.407l-1.063 2.4a.823.823 0 00.418 1.085l2.045.909c.036.363.054.73.054 1.102zM24.33 12.765a.9.9 0 011.274.03.903.903 0 01-1.303 1.245.903.903 0 01.03-1.275zm10.545 8.485a.9.9 0 111.646.732.9.9 0 11-1.646-.732z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgRust