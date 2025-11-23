interface Problem {
    id: string;
    title: string;
    language?: string;
    code: string;
}

type ProblemsMap = Record<string, Problem[]>;

const problemsMap: ProblemsMap = {
    "code-clash": [
        {
            id: 'blocks',
            title: 'Blocks',
            language: 'cpp',
            code: `#include <iostream>
#include <algorithm>
using namespace std;

int main() {
        int t;
        cin >> t;

        while (t--) {
                long long n;
                cin >> n;
                
                long long blocks = n / 15;
                long long remainder = n % 15;
                long long extra = min(3LL, remainder + 1);
                cout << blocks * 3 + extra << endl;
        }

        return 0;
}`,
        },
        {
            id: 'anagram',
            title: 'Anagram Check',
            language: 'python',
            code: `def main():
        t = int(input())
        for _ in range(t):
                n = int(input())
                a, b = input().split()
                if sorted(a) == sorted(b):
                        print("YES")
                else:
                        print("NO")

if __name__ == '__main__':
        main()`,
        },
        {
            id: 'puzzles',
            title: 'Puzzles',
            language: 'cpp',
            code: `#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

int main() {
        int n, m;
        cin >> n >> m;
                
        vector<int> pieces(m);
        for (int i = 0; i < m; i++) {
                cin >> pieces[i];
        }

        sort(pieces.begin(), pieces.end());
        int ans = 1e9;
        for(int i = 0; i + n - 1 < m; i++){
                ans = min(ans, pieces[i + n - 1] - pieces[i]);
        }

        cout << ans;
        return 0;
}`,
        },
    ],
};

export default problemsMap;
