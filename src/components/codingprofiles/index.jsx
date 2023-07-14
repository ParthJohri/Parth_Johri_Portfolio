// import { MdLocationOn } from 'react-icons/md';
// import PropTypes from 'prop-types';
// import { skeleton } from '../../helpers/utils';
// import {
//   FaBuilding,
//   FaLeetcode,
//   FaCodeforces,
//   FaCodepen,
//   FaGithub,
// } from 'react-icons/fa';
// import { SiCodechef, SiHackerrank, SiHackerearth, SiAtcoder } from 'react-icons/si';
// import { BiCodeAlt } from 'react-icons/bi';

// const isCompanyMention = (company) => {
//   return company.startsWith('@') && !company.includes(' ');
// };

// const companyLink = (company) => {
//   return `https://github.com/${company.substring(1)}`;
// };

// const getFormattedProfileLink = (profile, platform) => {
//   const username = profile[platform];
//   if (username) {
//     switch (platform) {
//       case 'leetcode':
//         return `https://leetcode.com/${username}`;
//       case 'codeforces':
//         return `https://codeforces.com/profile/${username}`;
//       case 'codechef':
//         return `https://www.codechef.com/users/${username}`;
//       case 'geeksforgeeks':
//         return `https://auth.geeksforgeeks.org/user/${username}`;
//       case 'hackerrank':
//         return `https://www.hackerrank.com/${username}`;
//       case 'hackerearth':
//         return `https://www.hackerearth.com/@${username}`;
//       case 'atcoder':
//         return `https://atcoder.jp/users/${username}`;
//       case 'cses':
//         return `https://cses.fi/user/${username}`;
//       default:
//         return null;
//     }
//   }
//   return null;
// };

// const getIconByPlatform = (platform) => {
//   switch (platform) {
//     case 'leetcode':
//       return <FaLeetcode />;
//     case 'codeforces':
//       return <FaCodeforces />;
//     case 'codechef':
//       return <SiCodechef />;
//     case 'geeksforgeeks':
//       return <FaCodepen />;
//     case 'hackerrank':
//       return <SiHackerrank />;
//     case 'hackerearth':
//       return <SiHackerearth />;
//     case 'atcoder':
//       return <SiAtcoder />;
//     case 'cses':
//       return <BiCodeAlt />;
//     default:
//       return null;
//   }
// };

// const ListItem = ({ icon, title, value, platform, profile, skeleton = false }) => {
//   const link = getFormattedProfileLink(profile, platform);
//   return (
//     <a
//       href={link}
//       target="_blank"
//       rel="noreferrer"
//       className="flex justify-start py-2 px-1 items-center"
//     >
//       <div className="flex-grow font-medium gap-2 flex items-center my-1">
//         {icon} {title}
//       </div>
//       <div
//         className={`${
//           skeleton ? 'flex-grow' : ''
//         } text-sm font-normal text-right mr-2 ml-3 ${link ? 'truncate' : ''}`}
//         style={{
//           wordBreak: 'break-word',
//         }}
//       >
//         {value}
//       </div>
//     </a>
//   );
// };

// const codeDetails = ({ profile, loading, codingProfiles, github }) => {
//   const renderSkeleton = () => {
//     let array = [];
//     for (let index = 0; index < 4; index++) {
//       array.push(
//         <ListItem
//           key={index}
//           skeleton={true}
//           icon={skeleton({ width: 'w-4', height: 'h-4' })}
//           title={skeleton({ width: 'w-24', height: 'h-4' })}
//           value={skeleton({ width: 'w-full', height: 'h-4' })}
//         />
//       );
//     }

//     return array;
//   };

//   return (
//     <div className="card shadow-lg compact bg-base-100">
//       <div className="card-body">
//         <div className="text-base-content text-opacity-60">
//           {loading || !profile ? (
//             renderSkeleton()
//           ) : (
//             <>
//               {profile.location && (
//                 <ListItem
//                   icon={<MdLocationOn />}
//                   title="Based in:"
//                   value={profile.location}
//                 />
//               )}
//               {profile.company && (
//                 <ListItem
//                   icon={<FaBuilding />}
//                   title="Company:"
//                   value={profile.company}
//                   link={
//                     isCompanyMention(profile.company.trim())
//                       ? companyLink(profile.company.trim())
//                       : null
//                   }
//                 />
//               )}
//               <ListItem
//                 icon={<FaGithub />}
//                 title="GitHub:"
//                 value={github.username}
//                 link={`https://github.com/${github.username}`}
//               />
//               {Object.entries(codingProfiles).map(([platform, title]) => (
//                 <ListItem
//                   key={platform}
//                   icon={getIconByPlatform(platform) || <BiCodeAlt />}
//                   title={title + ':'}
//                   value={profile[platform]}
//                   platform={platform}
//                   profile={profile}
//                 />
//               ))}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// codeDetails.propTypes = {
//   profile: PropTypes.object,
//   loading: PropTypes.bool.isRequired,
//   codingProfiles: PropTypes.object.isRequired,
//   github: PropTypes.object.isRequired,
// };

// ListItem.propTypes = {
//   icon: PropTypes.node,
//   title: PropTypes.node,
//   value: PropTypes.node,
//   platform: PropTypes.string.isRequired,
//   profile: PropTypes.object.isRequired,
//   skeleton: PropTypes.bool,
// };

// export default codeDetails;
