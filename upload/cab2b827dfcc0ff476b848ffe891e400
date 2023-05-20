#include <bits/stdc++.h>
using namespace std;

int t;

int main()
{
    cin >> t;

    while (t--)
    {
        int n, m, o;
        cin >> n >> m >> o;
        vector<int> working(n);
        vector<bool> signs(4, false);
        vector<bool> vis(100000);
        queue<pair<int, int>> q;
        int ans;
        cout << "hello?";
        for (int i = 0; i < n; i++)
        {
            cin >> working[i];
            q.push({working[i], 1});
        }

        for (int i = 0; i < m; i++)
        {
            int x;
            cin >> x;
            signs[x - 1] = true;
        }

        // cin >> o;

        int target;
        cin >> target;

        while (!q.empty())
        {
            int curr = q.front().first;
            int freq = q.front().second;

            q.pop();

            if (curr == target) {
                ans = freq;
                break;
            }

            if (!vis[curr])
            {

                for (int i = 0; i < n; i++)
                {
                    q.push({working[i] + curr * 10, freq + 1});
                }

                if (signs[0])
                {

                    for (int i = 0; i < n; i++)
                    {
                        q.push({working[i] + curr, freq + 3});
                    }
                }

                if (signs[1])
                {

                    for (int i = 0; i < n; i++)
                    {
                        q.push({curr - working[i], freq + 3});
                    }
                }

                if (signs[2])
                {

                    for (int i = 0; i < n; i++)
                    {
                        q.push({curr * working[i], freq + 3});
                    }
                }

                if (signs[2])
                {

                    for (int i = 0; i < n; i++)
                    {
                        if (working[i] == 0)
                            continue;
                        q.push({curr / working[i], freq + 3});
                    }
                }

                vis[curr] = true;
            }
        }
        cout << "answer: " <<  ans << "\n";
        
    }
}
