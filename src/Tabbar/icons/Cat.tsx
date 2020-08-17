import React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors, ICON_SIZE, IconProps } from "./Constants";

export default ({ active }: IconProps) => {
  return (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 20 20">
      <Path d="M0 0v293h341V0H0z" fill={active ? Colors.main : "none"} />
      <Path
        d="M29 11.518c-8.114 1.775-9.983 7.2-12.086 14.392C13.427 37.838 13 50.59 13 63c0 13.136 1.718 26.167 4.453 39 1.29 6.056 4.833 12.792 4.75 19-.04 3.071-1.448 6.026-2.084 9-1.679 7.85-3.147 16.012-3.948 24-2.594 25.842-.258 53.375 11.434 76.999C37.776 251.55 55.528 269.543 77 278.074c16.52 6.564 36.47 7.198 54 7.965 22.178.971 43.787 1.973 66 1 20.387-.892 42.087-.586 62-5.618 8.791-2.222 16.982-4.755 24.83-9.437 36.161-21.573 51.146-63.571 50.155-103.984-.245-10.021-1.47-20.167-3.434-30-1.171-5.862-4.101-13.023-3.277-19 1.159-8.406 4.626-16.595 6.111-25 3.159-17.88 3.86-37.035 1.054-55-1.262-8.083-.629-18.296-7.203-24.44-6.383-5.965-20.504-4.092-28.236-2.444-13.632 2.905-25.909 5.229-39 10.534-6.331 2.565-12.417 9.053-19 10.334-3.626.705-7.528-1.074-11-1.88-7.295-1.691-14.586-3.51-22-4.665-17.419-2.715-37.396-2.555-55-1.35-10.127.694-20.165 2.519-30 4.91-4.366 1.062-11.536 4.179-15.91 3.124-5.454-1.316-10.794-7.079-16.09-9.458-11.75-5.279-23.445-8.37-36-10.865-8.252-1.64-17.631-3.111-26-1.282z"
        fill={active ? Colors.main : "none"}
      />
      <Path
        d="M32 99c5.618-11.489 11.917-22.836 21.04-31.96C64.194 55.88 77.715 49.022 91 41c-10.42-9.748-28.608-11.768-42-14.513-4.81-.986-12.257-3.387-16.567.255-4.058 3.43-3.745 12.388-4.267 17.258-1.456 13.59-1.116 26.448.55 40 .628 5.12.558 10.478 3.284 15m227-57c13.821 7.272 28.178 15.31 38.829 27.004C305.991 77.964 310.967 88.663 317 99c3.503-6.446 3.635-14.8 4.035-22 .642-11.517 1.583-22.505-.281-34-.754-4.648-.545-12.497-3.766-16.258-3.069-3.583-11.063-1.28-14.988-.742-10.715 1.468-20.85 4.24-31.004 7.933-5.017 1.825-9.527 3.062-11.996 8.067M155 184c-12.046 1.564-24.306 7.568-32.957 16.09-3.962 3.902-6.152 10.891-11.147 13.477-3.847 1.992-8.749 1.952-12.896 3.013-10.114 2.588-20.152 5.799-30 9.254-2.941 1.032-12.87 3.504-13.168 7.36-.422 5.45 11.35-.586 13.168-1.28 14.414-5.498 29.127-8.969 44-12.914 0 3.043.61 7.052-1.028 9.775-1.738 2.89-5.792 3.973-8.547 5.646C94.753 239.082 87.251 243.645 80 249c-2.519 1.86-13.588 8.193-10.878 12.392 2.352 3.644 8.981-3.702 10.709-5.153 9.45-7.935 22.712-18.303 35.169-20.239 2.501 10.519 14.535 18.646 23.911 22.789 22.998 10.161 51.381 9.926 74.088-1.314 6.443-3.189 12.322-7.949 16.878-13.514 1.967-2.404 3.657-6.987 7.228-7.164 3.433-.17 7.128 2.563 9.895 4.282 7.524 4.673 14.979 9.752 21.999 15.156 1.799 1.385 8.534 8.79 10.879 5.157 2.705-4.19-8.347-10.544-10.878-12.381-6.12-4.443-12.331-9.093-18.999-12.688-3.741-2.018-9.708-3.667-11.977-7.547C236.41 226.018 237 222.067 237 219c14.861 3.933 29.661 7.489 44 13.133 4.449 1.752 11.896 6.142 14-.133-10.636-4.126-20.947-9.07-32-11.999-7.668-2.032-17.962-2.635-24.892-6.42-4.647-2.538-7.297-9.74-11.148-13.545-8.249-8.149-21.293-15.017-32.96-16.036 0-25.168 1.458-52.732-6.38-77-1.924-5.957-4.707-22.105-13.608-21.454-8.095.592-11.753 16.258-13.27 22.454-6.089 24.877-5.742 50.589-5.742 76m-57-73.532C73.115 115.17 63.925 146.075 72.88 167c7.281 17.012 25.344 25.862 43.12 21.876 22.943-5.145 33.614-34.397 25.535-54.876-7.038-17.842-24.914-27.051-43.535-23.532m136 0c-25.581 4.826-35.632 36.925-24.956 58.442 7.929 15.981 24.992 23.147 41.956 19.845 23.895-4.651 34.443-34.723 25.711-55.47-7.25-17.221-24.48-26.257-42.711-22.817z"
        fill={active ? Colors.main : "none"}
      />
      <Path
        d="M266 127h-2c-2.699 5.978-10.708 11.778-13.423 1.985-1.184-4.272 1.43-7.985 2.423-11.985-9.798-.854-18.159-2.636-27 3.638-18.548 13.165-19.678 45.259.001 58.254 18.996 12.544 42.016-.996 46.481-21.892 2.315-10.831-1.39-20.716-6.482-30m-138-1c-1.035 6.512-8.501 13.134-12.106 3.981-1.894-4.809.951-8.517 2.106-12.981-12.684-.545-23.08-2.327-32.7 8.09-16.744 18.131-9.743 53.946 16.7 58.581 21.72 3.808 35.03-16.54 35-35.671-.012-7.866-2.056-17.371-9-22m16 106c.371 11.44 12.446 13.821 21.996 11.291 2.828-.75 6.028-4.123 8.924-3.794 2.774.315 5.282 3.051 8.084 3.794 9.301 2.464 21.635-.169 21.996-11.291-4.387 1.587-6.267 6.487-11.001 8.181-7.149 2.557-20.753-4.017-17.38-13.122 1.668-4.504 8.923-6.169 11.987-10.064 1.425-1.812 2.458-3.806 3.169-5.995 4.131-12.714-6.507-18.079-17.775-17.995-5.294.039-11.928 1.061-15.682 5.22-4.604 5.1-1.755 14.043 2.076 18.735 3.012 3.69 10.24 5.048 12.002 9.187 3.95 9.28-9.595 16.356-17.111 14.108-5.025-1.502-6.782-6.623-11.285-8.255z"
        fill={active ? Colors.main : "none"}
      />
    </Svg>
  )
}

