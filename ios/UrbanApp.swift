//  하우스디어반 동네 한바퀴 — iOS 래퍼 앱
//  웹앱(index.html + data.js)을 WKWebView로 감싸 폰에 내장합니다.
//  사용법은 ios/README-iOS.md 참고.

import SwiftUI
import WebKit

@main
struct UrbanApp: App {
    var body: some Scene {
        WindowGroup { ContentView() }
    }
}

struct ContentView: View {
    var body: some View {
        WebAppView()
            .ignoresSafeArea()
            .background(Color(red: 1, green: 0.97, blue: 0.93)) // 종이색
    }
}

struct WebAppView: UIViewRepresentable {
    func makeCoordinator() -> Coordinator { Coordinator() }

    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.allowsInlineMediaPlayback = true
        let webView = WKWebView(frame: .zero, configuration: config)
        webView.uiDelegate = context.coordinator
        webView.scrollView.bounces = false
        webView.isOpaque = false
        webView.backgroundColor = UIColor(red: 1, green: 0.97, blue: 0.93, alpha: 1)

        // 번들에 내장된 web/index.html 로드 (서버·인터넷 불필요)
        if let url = Bundle.main.url(forResource: "index", withExtension: "html",
                                     subdirectory: "web") {
            webView.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
        }
        return webView
    }

    func updateUIView(_ uiView: WKWebView, context: Context) {}

    // 웹의 alert()/confirm()(리뷰 삭제 확인 등)을 네이티브 팝업으로 연결
    final class Coordinator: NSObject, WKUIDelegate {
        func webView(_ webView: WKWebView,
                     runJavaScriptAlertPanelWithMessage message: String,
                     initiatedByFrame frame: WKFrameInfo,
                     completionHandler: @escaping () -> Void) {
            present(message: message, confirm: false) { _ in completionHandler() }
        }

        func webView(_ webView: WKWebView,
                     runJavaScriptConfirmPanelWithMessage message: String,
                     initiatedByFrame frame: WKFrameInfo,
                     completionHandler: @escaping (Bool) -> Void) {
            present(message: message, confirm: true, completion: completionHandler)
        }

        private func present(message: String, confirm: Bool,
                             completion: @escaping (Bool) -> Void) {
            guard let root = UIApplication.shared.connectedScenes
                .compactMap({ ($0 as? UIWindowScene)?.keyWindow })
                .first?.rootViewController else { completion(true); return }
            let alert = UIAlertController(title: nil, message: message,
                                          preferredStyle: .alert)
            if confirm {
                alert.addAction(UIAlertAction(title: "취소", style: .cancel) { _ in
                    completion(false)
                })
            }
            alert.addAction(UIAlertAction(title: "확인", style: .default) { _ in
                completion(true)
            })
            root.present(alert, animated: true)
        }
    }
}
