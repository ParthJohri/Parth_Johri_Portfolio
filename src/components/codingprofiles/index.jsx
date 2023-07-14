import { skeleton } from '../../helpers/utils';

import { SiLeetcode, SiCodeforces, SiCodechef, SiHackerrank, SiHackerearth, SiGeeksforgeeks } from 'react-icons/si';

import { Fragment } from 'react';

import PropTypes from 'prop-types';

const ListItem = ({ icon, title, value, link, skeleton = false }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex justify-start py-2 px-1 items-center"
    >
      <div className="flex-grow font-medium gap-2 flex items-center my-1">
        {icon} {title}
      </div>
      <div
        className={`${
          skeleton ? 'flex-grow' : ''
        } text-sm font-normal text-right mr-2 ml-3 ${link ? 'truncate' : ''}`}
        style={{
          wordBreak: 'break-word',
        }}
      >
        {value}
      </div>
    </a>
  );
};

const CodeDetails = ({ profile, loading, social, github }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <ListItem
          key={index}
          skeleton={true}
          icon={skeleton({ width: 'w-4', height: 'h-4' })}
          title={skeleton({ width: 'w-24', height: 'h-4' })}
          value={skeleton({ width: 'w-full', height: 'h-4' })}
        />
      );
    }

    return array;
  };
return (
  <div className="card shadow-lg compact bg-base-100">
    <div className="card-body">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-70">
                    Coding Profiles
                  </span>
                )}
              </h5>
      <div className="text-base-content text-opacity-60">
        {(
          <Fragment>
            {(
              <ListItem
                icon={<SiLeetcode />}
                title="LeetCode:"
                value={"binarysolver"}
                link={`https://leetcode.com/binarysolver`}
              />
            )}
            {(
              <ListItem
                icon={<SiCodeforces />}
                title="Codeforces:"
                value={"binarysolver"}
                link={`https://codeforces.com/profile/binarysolver`}
              />
            )}
            {(
              <ListItem
                icon={<SiGeeksforgeeks />}
                title="GeeksForGeeks:"
                value={"parthjohri31"}
                link={`https://auth.geeksforgeeks.org/user/parthjohri31/practice`}
              />
            )}
            {(
              <ListItem
                icon={<SiCodechef />}
                title="CodeChef:"
                value={"parthjohri"}
                link={`https://www.codechef.com/users/parthjohri`}
              />
            )}
            {(
              <ListItem
                icon={<SiHackerrank />}
                title="Hackerank:"
                value={"parthjohri31"}
                link={`https://www.hackerrank.com/parthjohri31?hr_r=1`}
              />
            )}
          </Fragment>
        )}
      </div>
    </div>
  </div>
);
            }
export default CodeDetails;
